class indexHtml {
    constructor() {
        this.$Navigation = $('#Navigation');
        this.$Search = $('#Search');
        this.$Sidelist = $('#Sidelist');
        this.init();
    }
    init() {
        this.$Navigation.load('./html/public.html #p-Navigation', function () {
            class Popup {
                constructor() {
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
                //遮罩层设置
                addEvent() {
                    let height = document.body.scrollHeight;
                    let that = this;
                    let $div = $('.float>div');
                    let $h3 = $('h3');
                    let $p = $('.float>p');
                    let left = $(window).width() / 2 - that.$float.width() / 2;
                    //登陆遮罩层设置
                    that.$login.click(function () {
                        that.$mark.css('display', 'block');
                        that.$float.css('left', left);
                        that.$mark.css('height', height)
                        $p.html('欢迎您来到小米有品！<br>您可在有品进行商品浏览、支付购买、售后服务等功能。我们将严格遵守相关法律法规和隐私政策以保护您的个人信息。请您阅读并同意<span>《小米有品用户协议》</span>、<span>《隐私政策》</span>、<span>《小米账号使用协议》</span>和<span>《小米账号隐私政策》</span>。');
                        $h3.css('margin-top', 40);
                        $div.css('margin-top', 30);
                        //登陆页面的跳转
                        that.$one.click(function () {
                            location.href = 'https://www.baidu.com/';
                        })
                    })
                    //关闭遮罩层
                    that.$cls.click(function () {
                        that.$mark.css('display', 'none');
                    })
                    //关闭遮罩层
                    that.$two.click(function () {
                        location.reload(false);
                    })
                    //注册遮罩层设置
                    that.$rigister.click(function () {
                        that.$mark.css('display', 'block');
                        that.$float.css('left', left);
                        that.$mark.css('height', height)
                        $p.html('欢迎您来到小米有品！<br>我们依据最新法律法规要求，制定并更新了<span>《隐私政策》</span>、<span>《小米有品用户协议》</span>以及<span>《小米帐号使用协议》</span>。您需阅读并同意相关政策条款方可进行登录。');
                        $h3.css('margin-top', 50);
                        $div.css('margin-top', 38)
                        //注册页面的跳转
                        that.$one.click(function () {
                            location.href = 'https://www.jd.com/';
                        })
                    })
                }
                //初始化第一行第一格的设置
                init() {
                    let that = this;
                    //获取cookie
                    let cookie = $.cookie('login') ? $.cookie('login') : '';
                    if (cookie) {
                        //cookie存在  第一格的样式
                        this.$first_li.html(`<a>${cookie}</a><i class="iconfont icon-xia"></i>`);
                        this.$first_li.addClass('sli');
                        //第一格的移入移出事件
                        this.$first_li.on({
                            'mouseenter': function () {
                                that.$show_box.css('display', 'block');
                                let left22 = $(this).offset().left + 5;
                                that.$show_box.css('left', left22);
                            }, 'mouseleave': function () {
                                that.$show_box.css('display', 'none');
                            }
                        })
                        //隐藏内容的移入移出事件
                        this.$show_box.on({
                            'mouseenter': function () {
                                $(this).css('display', 'block');
                            }, 'mouseleave': function () {
                                $(this).css('display', 'none');
                            }
                        })
                        let $a = this.$show_box.children().last().prev();
                        $a.click(function () {
                            $.removeCookie('user');
                            //删除cookie之后恢复默认样式
                            location.reload(true);
                        })
                    }
                }
            }
            new Popup();
        });
        this.$Search.load('./html/public.html #p-Search', function () {
            let $input = $('#Search .input>input');
            $input.on({
                //输入框的得焦事件
                'focus': function () {
                    let $input_big = $('#Search .input');
                    $input_big.css('border-bottom-color', 'black');
                    //失焦事件
                }, 'blur': function () {
                    let $input_big = $('#Search .input');
                    $input_big.css('border-bottom-color', '#e7e7e7');
                }
            })
            //滚动事件
            $(window).scroll(function () {
                // 滚动到一定距离添加     类
                let $p_Search = $('#p-Search');
                let height = document.documentElement.scrollTop;
                if (height >= 482) {
                    $p_Search.addClass('fixed');
                } else {
                    $p_Search.removeClass('fixed');
                }
            })
            //jsonp 搜索框偷数据
            ;(function(){
                let left = $('#Search .input').offset().left;
                let txt = document.querySelector('#Search .input>input')
                let $ul = $('.jsonp')
                $ul.css({
                    "display":"none",
                    "position": "absolute",
                    "top": 120,
                    "left":left,
                    "z-index": 1000,
                    "background-color": "#fff",
                    "width": 280,
                    "overflow": "hidden",
                    "height": "auto",
                    "max-height": 360,
                    "overflow": "hidden"
                })
                //二、添加事件
                txt.onkeyup = function () {
                    $ul.css('display','block')
                    $ul.text('');
                    //动态创建script标签
                    let sc = document.createElement('script');
                    //设置属性
                    sc.src = `https://suggest.taobao.com/sug?k=1&area=c2c&q=${this.value}&code=utf-8&ts=1659598078801&callback=fn`;
                    //添加到页面中
                    document.head.appendChild(sc);
                }
            }());
            
        });
        this.$Sidelist.load('./html/public.html #p-Sidelist', function () {
            let $last = $('#Sidelist .last')
            $last.click(function () {
                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                    //auto 立刻回到顶部
                })
            })
        });
    }
}
class list_slide {
    constructor() {
        this.$li = $('#List ul>li');
        this.$detail = $('.nav-detail');
        this.init();
    }
    //左边列表的移入移出事件
    init() {
        let that = this;
        this.$li.each(function (index, value) {
            $(this).on({
                'mouseenter': function () {
                    that.$detail.eq(index).css('display', 'block')
                    $(this).parent().css('height', 460.8);
                },
                'mouseleave': function () {
                    that.$detail.eq(index).css('display', 'none')
                    $(this).parent().css('height', 358);
                }
            })
        })
        this.$detail.each(function (index, value) {
            $(this).on({
                'mouseenter': function () {
                    $(this).css('display', 'block')
                    that.$li.parent().css('height', 460.8);
                },
                'mouseleave': function () {
                    $(this).css('display', 'none')
                    that.$li.parent().css('height', 358);
                }
            })
        })
    }
}

$(function () {
    new indexHtml();
    new list_slide();
})
