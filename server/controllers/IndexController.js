class IndexController{
    constructor() {}
    async  actionIndex(ctx, next) {
        ctx.body  =  await ctx.render('index', {
            body: '欢迎<script type="text/javascript">alert("dab")</script>'
        });

    }
}

export default IndexController;