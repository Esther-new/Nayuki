<template>
	<view class="container">
		<!-- banner -->
		<view class="banner">
			<image src="https://img-shop.qmimg.cn/s23107/2020/04/26/3eb7808bf105262604.jpg" class="bg"></image>
			<view class="intro">
				<text class="username">您好，tinypuppet</text>
				<text class="info">一杯奶茶，一口软欧包，在奈雪遇见两种美好</text>
			</view>		
		</view>
		<!-- 外卖 自取 -->
		<view class="content">
			<view class="entrance">
				<view class="zq">
					<image src="../../static/images/index/zq.png" class="zqt"></image>
					<text class="zqz">自取</text>
				</view>
				<view class="wm">
					<image src="../../static/images/index/wm.png" class="wmt"></image>
					<text class="wmz">外卖</text>
				</view>
			</view>
			
			<!-- 我的积分 -->
			<view class="integral">
				<view class="mine">
					<view class="change">
						<text>我的积分 </text>
						<text class="number">411</text>
					</view>
					<text>进入积分商城兑换奈雪券及周边好礼></text>
				</view>
				<view class="member_code">
					<image src="../../static/images/mine/hym.png" class="image"></image>
					<text class="huiyuanma">会员码</text>
				</view>
			</view>
			
			<!-- 奈雪商城 -->
			<view class="shop">
				<view class="green">
					<view class="title">
						<view class="shangcheng">
							<image src="../../static/images/index/csc.png" class="bag"></image>
								<text>奈雪的茶商城</text>
						</view>
							<view class="snack">
								优质茶礼盒，网红零食
							</view>
					</view>
					<image src="../../static/images/index/yzclh.png" class="shopping_bag"></image>
				</view>
				<view class="two">
					<view class="pink">
						<view class="text">
							<image src="../../static/images/index/mcsb.png" class="dot"></image>
							<text>买茶送包</text>
						</view>	
						<image src="../../static/images/index/mcsb_bg.png" class="dot_bg"></image>
					</view>
					<view class="yellow">
						<view class="text">
							<image src="../../static/images/index/hyjb.png" class="diamond"></image>
							<text>会员券包</text>
						</view>
						<image src="../../static/images/index/hyjb_bg.png" class="diamond_bg"></image>
					</view>
				</view>
			</view>
			
			<!-- 会员新鲜事 -->
			<view class="bottom">
				<view class="fresh">
						<text class="fresh_things">会员新鲜事</text>
						<image src="../../static/images/index/arrow-right.png" class="arrow_right"></image>
				</view>
					<view class="meinibuxing">
						<image src="https://img-shop.qmimg.cn/s23107/2020/04/27/0039bf41c9ebd50a2c.jpg" class="meini_bg"></image>
						<text class="title">"梅"你不行|霸气杨梅清爽回归</text>
					</view>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				href: 'https://uniapp.dcloud.io/component/README?id=uniui'
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.container {
		background-color: #F0F7F9;
		height: 1000px;
		.banner{
			position:relative;
			width:100%;
			.bg{
				width:100%;
			}
			.intro{
				position: absolute;
				display: flex;
				flex-direction: column;
				top:20rpx;
				left:40rpx;
				color: white;
				.usersname{
					font-size: $font-size-lg;
					margin-bottom: 10rpx;
				}
				.info{
					font-size: $font-size-sm;
				}
			}
		}
		.content{
			display: flex;
			flex-direction:column;
			padding:0rpx 30rpx;
			position: absolute;
			top:370rpx;
			width:100%;
			height:100%;
			.entrance{
				display: flex;
				justify-content: center;
				align-items: center;
				width:90%;
				height:200rpx;
				// margin:40rpx;
				background-color: white;
				border-radius: 6rpx;
				
				.zq{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					width:50%;
					height: 60%;
					border-right:1px solid #CCCCCC;
					// overflow: hidden;
					.zqt{
						width:30%;
						height:50%;
					}
				}
				.wm{
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					align-items: center;
					width:50%;
					height: 60%;
					.wmt{
						width:30%;
						height:60%;
					}
				}
			}
			
			// 我的积分
			.integral{
				display: flex;
				justify-content: space-between;
				align-items: center;
				width:85%;
				height:150rpx;
				background-color: white;
				margin-top:20rpx;
				padding:0rpx 20rpx;
				border-radius: 6rpx;
				// box-sizing: border-box;
				.mine{
					font-size: $font-size-sm;
					color: $text-color-assist;
					.change{
							color: $text-color-base;
							font-size: $font-size-base;
						.number{
							font-size: 44rpx;
							font-weight: bold;
							margin-left:10rpx;
						}
					}
				}
				.member_code{
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					// padding: 20rpx;
					// 设宽高图片才可以显示出来
					height:100rpx;
					width: 100rpx;
					.image{
						width:40%;
						height:40%;
						margin-bottom: 10rpx;
					}
					.huiyuanma{
						paddiing-top:10rpx;
						font-size: $font-size-sm;
						color: $color-primary;
					}
				}
			}
			
			// 奈雪商城
			.shop{
				display: flex;
				justify-content: space-around;
				align-items: center;
				width:89%;
				height:300rpx;
				padding:0 6rpx;
				margin-top: 20rpx;
				background-color: white;
				font-size: $font-size-sm;
				color: $text-color-base;
				.green{
					position: relative;
					width:50%;
					height:270rpx;
					background-color: #F2F2E6;
					.title{
						width:100%;
						height: 100%;
						margin:28rpx 18rpx;
						.shangcheng{
							display: flex;
							.bag{
								width:30rpx;
								height:30rpx;
								margin-left:2rpx;
							}
						}
					
						.snack{
							margin-left: 40rpx;
							color:$text-color-assist;
							font-size:20rpx;
							
						}
					}
					.shopping_bag{
						position: absolute;
						top:130rpx;
						left:160rpx;
						width:50%;
						height:50%;
						
					}
				}
				
				.two{
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					position: relative;
					width:45%;
					height: 280rpx;
					.pink{
						display: flex;
						width:100%;
						height:125rpx;
						margin-left:0;
						background-color: #FDF3F2;
						overflow: hidden;
						.text{
							display: flex;
							align-items: center;
							padding: 30rpx;
							.dot{
								width:30rpx;
								height:30rpx;
							}
							
						}
						
						.dot_bg{
							position: absolute;
							top:30rpx;
							right:-0.5rpx;
							width:100rpx;
							height:100rpx;
						}
					}
					.yellow{
						display: flex;
						width:100%;
						height:125rpx;
						background-color: #FCF6D4;
						overflow: hidden;
						.text{
							display: flex;
							// justify-content: center;
							align-items: center;
							padding: 30rpx;
							.diamond{
									width:30rpx;
								    height:30rpx;
							}
						}
						
						.diamond_bg{
							position: absolute;
							bottom:9rpx;
							right:-0.5rpx;
							width:100rpx;
							height:100rpx;
						}
					}
				}
			}
			
			// 会员新鲜事
			.bottom{
				display: flex;
				flex-direction: column;
				width:90%;
				height:300rpx;
				margin-top:20rpx;
				// background-color: white;
				.fresh{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.fresh_things{
						font-size: 30rpx;
						font-weight: bold;
					}
					.arrow_right{
						width: 40rpx;
						height:40rpx;
						color:#9EA0A1;
					}
				}
				.meinibuxing{
					position: relative;
					width:100%;
					margin-top:20rpx;
					border-radius: 6rpx;
					overflow: hidden;
					.meini_bg{
						width:100%;
						height:250rpx;
					}
					.title{
						position: absolute;
						bottom:5rpx;
						left:5rpx;
						font-size: $font-size-lg;
						color:white;
					}
				}
			}
		}
		
	}
</style>
