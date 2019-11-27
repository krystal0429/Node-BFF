import Books from "../models/Books";
class BooksController {
    constructor() {
    }
   
    async actionList(ctx, next) {
        const books = new Books();
        const result = await books.getData({
            url: "books/index"
        });
        const html = await ctx.render('books/list', {
            data: result.data.data
        });
        ctx.body = html;
        // if (ctx.request.header["x-pjax"]) {
        //     console.log("站内跳");
        //     const $ = cheerio.load(html);
        //     // ctx.body = $("#js-hooks-data").html()
        //     let _result = "";
        //     $(".pjaxcontext").each(function() {
        //         _result += $(this).html()
        //     });
        //     $(".lazyload-js").each(function() {
        //         _result += `<script src="${$(this).attr("src")}"></script>`;
        //     });
        //     ctx.body = _result;
        // } else {
        //     console.log("直接刷");
        //     ctx.body = html;
        // }
        // console.log(result);
    }
}
export default BooksController;