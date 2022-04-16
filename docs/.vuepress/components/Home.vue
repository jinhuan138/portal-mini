<template>
    <div class="index-page">
        <div class="main">
            <div class="team-banner">
                <div class="team-banner-item team-banner-content">
                    <h1 class="banner-title banner-title-size">有温度的开发团队</h1>
                    <p class="banner-des-size description-color">可以随时了解查阅前端平台现有产品及文档，加速信息传递和共享，加快信息交流，从而提高组员工作效率的平台</p>
                </div>
                <div class="team-banner-item team-banner-img">
                    <img src="/banner.png" />
                </div>
            </div>
            <!-- <index-dashboard title="文档中心" :description="sharedState.styleMode === $modeDefine.COMPLEX ? '快速了解产品相关网站及开发文档，编码规范等' : ''"></index-dashboard>

            <index-quick title="快捷方式" :description="sharedState.styleMode === $modeDefine.COMPLEX ? '快速进入代码仓库、OA、Tapd地址链接' : ''"></index-quick> -->

            <h1 class="section-title-size">更多功能</h1>
            <p class="section-des-size description-color">建设中...</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
}
</script>

<style lang='scss' scoped>
.main {
    max-width: 75%;
    margin: 0 auto;
    padding-bottom: 40px;

    .banner-title {
        color: var(--banner-title-color);
    }

    .team-banner {
        display: flex;
        flex-wrap: wrap;

        & > .team-banner-item {
            width: 50%;
        }

        .team-banner-img > img {
            width: 100%;
        }
    }
}

@media screen and (max-width: 992px) {
    .main {
        min-width: 90%;
    }
}
@media screen and (max-width: 768px) {
    .main .team-banner {
        position: relative;

        .team-banner-content {
            position: absolute;
            z-index: 2;
        }
        .team-banner-img {
            position: relative;

            &::before {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                position: absolute;
                z-index: 1;
                background: var(--main-bg-color);
                filter: opacity(30%);
            }
        }

        & > .team-banner-item {
            width: 100%;
        }
    }
}

@media screen and (max-width: 468px) {
    .team-banner .team-banner-img::before {
        filter: opacity(60%);
    }
}
</style>