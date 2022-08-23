class indexHtml{
    constructor(){
        this.$Navigation = $('#Navigation');
        this.$Search = $('#Search');
        this.$Sidelist = $('#Sidelist');
        this.$mark = $('#mark')
        this.init();
    }
    init(){
        this.$Navigation.load('./html/public.html #p-Navigation',function(){
            class Popup{
                constructor(){
                    //获取登陆按钮
                    this.$login = $('.login');
                    //获取注册按钮
                    this.$rigister = $('.rigister');
                    //遮罩层
                    this.$mark = $('#mark');
                    //弹出层
                    this.$float = $('.float');
                    //x按钮
                    this.$cls = $('.float>span');
                    //去登陆按钮
                    this.$one = $('.one');
                    //取消按钮
                    this.$two = $('.two');
                    this.addEvent();
                }
                addEvent(){
                    let that = this;
                    let $div = $('.float>div');
                    let $h3 = $('h3');
                    let $p = $('.float>p');
                    let left = $(window).width() / 2 - that.$float.width() / 2;
                    this.$login.click(function(){
                        that.$mark.css('display','block');
                        that.$float.css('left',left);
                        $p.html('欢迎您来到小米有品！<br>您可在有品进行商品浏览、支付购买、售后服务等功能。我们将严格遵守相关法律法规和隐私政策以保护您的个人信息。请您阅读并同意<span>《小米有品用户协议》</span>、<span>《隐私政策》</span>、<span>《小米账号使用协议》</span>和<span>《小米账号隐私政策》</span>。');
                        $h3.css('margin-top',40);
                        $div.css('margin-top',30);
                        that.$one.click(function(){
                            location.href = 'https://www.baidu.com/';
                        })
                    })
                    this.$cls.click(function(){
                        that.$mark.css('display','none');
                    })
                    this.$two.click(function(){
                        location.reload(false);
                    })
                    this.$rigister.click(function(){
                        that.$mark.css('display','block');
                        that.$float.css('left',left);
                        $p.html('欢迎您来到小米有品！<br>我们依据最新法律法规要求，制定并更新了<span>《隐私政策》</span>、<span>《小米有品用户协议》</span>以及<span>《小米帐号使用协议》</span>。您需阅读并同意相关政策条款方可进行登录。');
                        $h3.css('margin-top',50);
                        $div.css('margin-top',38)
                        that.$one.click(function(){
                            location.href = 'https://www.jd.com/';
                        })
                    })
                }
            }
            new Popup();
        });
        this.$Search.load('./html/public.html #p-Search');
        this.$Sidelist.load('./html/public.html #p-Sidelist');
    }
}
$(function(){
    new indexHtml();
})