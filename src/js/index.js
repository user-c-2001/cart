class indexHtml{
    constructor(){
        this.$Navigation = $('#Navigation');
        this.$Search = $('#Search');
        this.$Sidelist = $('#Sidelist');
        this.init();
    }
    init(){
        let that = this;
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
                    //顶部第一个li
                    this.$first_li = $('#p-Navigation ul>li:eq(0)');
                    //登录成功后划过显示的盒子
                    this.$show_box = $('.success');
                    this.addEvent();    
                    this.init();
                }
                addEvent(){
                    let height = document.body.scrollHeight;
                    let that = this;
                    let $div = $('.float>div');
                    let $h3 = $('h3');
                    let $p = $('.float>p');
                    let left = $(window).width() / 2 - that.$float.width() / 2;
                    that.$login.click(function(){
                        that.$mark.css('display','block');
                        that.$float.css('left',left);
                        that.$mark.css('height',height)
                        $p.html('欢迎您来到小米有品！<br>您可在有品进行商品浏览、支付购买、售后服务等功能。我们将严格遵守相关法律法规和隐私政策以保护您的个人信息。请您阅读并同意<span>《小米有品用户协议》</span>、<span>《隐私政策》</span>、<span>《小米账号使用协议》</span>和<span>《小米账号隐私政策》</span>。');
                        $h3.css('margin-top',40);
                        $div.css('margin-top',30);
                        that.$one.click(function(){
                            location.href = 'https://www.baidu.com/';
                        })
                    })
                    that.$cls.click(function(){
                        that.$mark.css('display','none');
                    })
                    that.$two.click(function(){
                        location.reload(false);
                    })
                    that.$rigister.click(function(){
                        that.$mark.css('display','block');
                        that.$float.css('left',left);
                        that.$mark.css('height',height)
                        $p.html('欢迎您来到小米有品！<br>我们依据最新法律法规要求，制定并更新了<span>《隐私政策》</span>、<span>《小米有品用户协议》</span>以及<span>《小米帐号使用协议》</span>。您需阅读并同意相关政策条款方可进行登录。');
                        $h3.css('margin-top',50);
                        $div.css('margin-top',38)
                        that.$one.click(function(){
                            location.href = 'https://www.jd.com/';
                        })
                    })
                }
                init(){
                    let that = this;
                    let cookie = $.cookie('user') ? $.cookie('user') : '';
                    if(cookie){
                        this.$first_li.html(`<a>${cookie}</a><i class="iconfont icon-xia"></i>`);
                        this.$first_li.addClass('sli');
                        this.$first_li.on({'mouseenter':function(){
                            that.$show_box.css('display','block');
                            let left22 = $(this).offset().left + 5;
                            that.$show_box.css('left',left22);
                        },'mouseleave':function(){
                            that.$show_box.css('display','none');
                        }})
                        this.$show_box.on({'mouseenter':function(){
                            $(this).css('display','block');
                        },'mouseleave':function(){
                            $(this).css('display','none');
                        }})
                        let $a = this.$show_box.children().last().prev();
                        $a.click(function(){
                            $.removeCookie('user');
                        })
                    }
                }
            }
            new Popup();
        });
        this.$Search.load('./html/public.html #p-Search',function(){
            let $input = $('#Search .input>input');
            $input.on({'focus':function(){
                let $input_big = $('#Search .input');
                $input_big.css('border-bottom-color','black');
            },'blur':function(){
                let $input_big = $('#Search .input');
                $input_big.css('border-bottom-color','#e7e7e7');
            }})
            // $(window).scroll(function(){
            //     if(scrollTop == 482){
            //         that.$Search.css('sticky')
            //     }
            // })   
        });
        this.$Sidelist.load('./html/public.html #p-Sidelist',function(){
            let $last = $('#Sidelist .last')
            $last.click(function(){
                window.scrollTo({
                    top:0,
                    behavior:"smooth"
                    //auto 立刻回到顶部
                })
            })
        });
    }
}
class list_slide{
    constructor(){
        this.$li = $('#List ul>li');
        this.$detail = $('.nav-detail')
        this.init();
    }
    init(){
        let that = this;
        this.$li.each(function(index,value){
            $(this).on({'mouseenter':function(){
                that.$detail.css('display','block')
            },
            'mouseleave':function(){
                that.$detail.css('display','none')
            }})
        })
        this.$detail.each(function(index,value){
            $(this).on({'mouseenter':function(){
                $(this).css('display','block')
            },
            'mouseleave':function(){
                $(this).css('display','none')
            }})
        })
    }
}

$(function(){
    new indexHtml();
    new list_slide();
})