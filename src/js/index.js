class indexHtml{
    constructor(){
        this.$Navigation = $('#Navigation');
        this.$Search = $('#Search');
        this.$Sidelist = $('#Sidelist');
        this.init();
    }
    init(){
        this.$Navigation.load('./html/public.html #p-Navigation');
        this.$Search.load('./html/public.html #p-Search');
        this.$Sidelist.load('./html/public.html #p-Sidelist');
    }
}
$(function(){
    new indexHtml();
})

