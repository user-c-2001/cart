class indexHtml{
    constructor(){
        this.$Navigation = $('#Navigation');
        this.$Search = $('#Search');
        this.init();
    }
    init(){
        this.$Navigation.load('./html/public.html #p-Navigation');
        this.$Search.load('./html/public.html #p-Search');
    }
}
$(function(){
    new indexHtml();
})

