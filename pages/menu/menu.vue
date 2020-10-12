<template>
	<view class="menu-container">
		<view class="menu">
			<scroll-view class="catescroll" scroll-y scroll-with-animation>
				<view class="cate-container">
					<view class="item" :id="`menu-${item.id}`" v-for="(item,index) in cate" :key="index" 
					@tap="tapmenu(item.id)" :class="{'light' : item.id===cateid}" :scroll-into-view="menuScrollIntoView" >
						<text>{{item.name}}</text>
					</view>
				</view>
			</scroll-view>
			<scroll-view class="goodsscroll" scroll-y scroll-with-animation @scroll="handleGoodsScroll" :scroll-top="cateScrollTop">
				<view class="wrapper">
					<swiper class="ads" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
						<swiper-item  v-for="(item,index) in ads" :key="index">
							<view class="swiper-item">
								<image :src="item.image" mode=""></image>
							</view>
						</swiper-item>
					</swiper>
				</view>
				
				<view class="category" v-for="(item,index) in cate" :key="index" :id="`cate-${item.id}`">
					<view class="title" >
						<text>{{item.name}}</text>
						<image :src="item.icon" mode="" class="icon"></image>
					</view>
					
					<view class="list">
						<view class="good" v-for="(good, key) in item.goods_list" :key="key">
							<view class="left">
								<image :src="good.images" mode=""></image>
							</view>
							<view class="right">
								<view class="title">
									<text >{{good.name}}</text>
								</view>
								<view class="introduce">
									<text>{{good.content}}</text>
								</view>
								<view class="bottom">
									<text class="price">￥{{good.price}}</text>
									<view class="btn-group" v-if="good.use_property">
										<button type="primary" class="btn property_btn" hover-class="none" size="mini">
											选规格
										</button>
									</view>
									<view class="btn-group" v-else>
										<button type="primary" class="btn add_btn" size="mini" hover-class="none"
											@tap="handleAddToCart(item, good, 1)">
											<view class="iconfont iconadd-select"></view>
										</button>
									</view>
								</view>
							</view>
						</view>
					</view>
					
				</view>
				
				
			</scroll-view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cate:[],
				cateid:6905,
				ads: [
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/27/4ebdb582a5185358c4.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://images.qmai.cn/s23107/2020/05/08/c25de6ef72d2890630.png?imageView2/2/w/600/h/600'},
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/10/add546c1b1561f880d.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://images.qmai.cn/s23107/2020/04/30/b3af19e0de8ed42f61.jpg?imageView2/2/w/600/h/600'},
					{image: 'https://img-shop.qmimg.cn/s23107/2020/04/17/8aeb78516d63864420.jpg?imageView2/2/w/600/h/600'}
				],
				menuScrollIntoView:'',
				cateScrollTop: 0,
				sizeCalcState:false
			};
		},
		methods:{
			async init(){
				this.cate = await this.$api('goods')
				console.log(this.cate)
			},
			tapmenu(id){
				if(!this.sizeCalcState) {
					this.calcSize()
				}
				this.cateid = id
				this.$nextTick(() => this.cateScrollTop = this.cate.find(item => item.id == id).top)
			},
			handleGoodsScroll({detail}){
				// console.log(detail)
				if(!this.sizeCalcState) {
					this.calcSize()
				}
				const {scrollTop} = detail
				let tabs = this.cate.filter(item=> item.top <= scrollTop).reverse()
				console.log(tabs)
				if(tabs.length > 0){
					this.currentCateId = tabs[0].id
				}
			},
			calcSize() {
				let h = 10
				
				let view = uni.createSelectorQuery().select('#ads')
				view.fields({
					size: true
				}, data => {
					h += Math.floor(data.height)
				}).exec()
				
				this.cate.forEach(item => {
					let view = uni.createSelectorQuery().select(`#cate-${item.id}`)
					view.fields({
						size: true
					}, data => {
						item.top = h
						h += data.height
						item.bottom = h
					}).exec()
				})
				this.sizeCalcState = true
			},
		},
		onLoad(){
			this.init()
		}
	}
</script>

<style lang="scss">
	.menu-container{
		.menu{
			display: flex;
			// flex-direction: column;
			.catescroll{
				width: 30%;
				height: 1150rpx;
				background-color: #f5f5fe;
				.cate-container{
					.item{
						width: 100%;
						height: 90rpx;
						display: flex;
						// justify-content: center;
						align-items: center;
						font-size: 26rpx;
						color: #919293;
						padding-left: 20rpx;
					}
					.light{
						color: black;
						background-color: #FFFFFF;
					}
				}
			}
			
			.goodsscroll{
				width: 100%;
				height: 1150rpx;
				padding: 20rpx;
				background-color: #FFFFFF;
				.wrapper{
					.ads{
						width: 100%;
						height: 300rpx;
						.swiper-item{
							height: 100%;
							width: 100%;
							image{
								height: 100%;
								width: 100%;
							}
						}
					}
				}
				
				.category{
					// width: 100%;
					padding: 30rpx 0;
					.title{
						// height: 100%;
						// width: 20%;
						font-size: 28rpx;
						.icon{
							height: 38rpx;
							width: 38rpx;
						}
					}
				
					.list{
						width: 100%;
						.good{
							display: flex;
							width: 100%;
							height: 160rpx;
							margin-bottom: 30rpx;
							justify-content: space-between;
							padding-right: 16rpx;
							.left{
								width: 160rpx;
								height: 100%;
								image{
									width: 100%;
									height: 100%;
								}
							}
							.right{
								display: flex;
								flex-direction: column;
								justify-content: space-between;
								width: 330rpx;
								height: 100%;
								
								.title{
									
								}
								
								.introduce{
									font-size: 24rpx;
									color: #919293;
									display: inline-block;
									  white-space: nowrap; 
									  width: 100%; 
									  overflow: hidden;
									  text-overflow:ellipsis;
								}
								
								.bottom{
									display: flex;
									justify-content: space-between;
									
									.price{
										font-weight:800;
									}
									
									.btn-group {
										display: flex;
										justify-content: space-between;
										align-items: center;
										position: relative;
									
										.btn {
											padding: 0 20rpx;
											box-sizing: border-box;
											font-size: $font-size-sm;
											height: 44rpx;
											line-height: 44rpx;
									
											&.property_btn {
												border-radius: 24rpx;
											}
									
											&.add_btn,
											&.reduce_btn {
												padding: 0;
												width: 44rpx;
												border-radius: 44rpx;
											}
										}
									}
								}
							}
						}
					}
				
				}
			}
			
		}
	}
</style>
