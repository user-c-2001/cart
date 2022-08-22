class indexHtml{
    constructor(){
        this.$Navigation = $('#Navigation');
        this.init();
    }
    init(){
        this.$Navigation.load('./html/public.html #p-Navigation');
    }
}
$(function(){
    new indexHtml();
})

