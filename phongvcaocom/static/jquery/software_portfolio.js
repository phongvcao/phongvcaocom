$(window).load(function() {
    var soft_portfolio_flow = new ImageFlow();

    soft_portfolio_flow.init({
        ImageFlowID: "soft-portfolio-flow",
        reflections: false,
        reflectionP: 0.0,
        captions: true,
        onClick: function() {},
        imageFocusMax: 1,
        imageFocusM: 1.45,
        xStep: 80,
        opacity: true,
        opacityArray: [10, 9, 8, 7, 6],
        animationSpeed: 50,
        imagesHeight: 0.5,
        scrollbarP: 0.64
    });

    var download_htmlStr = "Download this software";
    var original_htmlStr = "";

    $("#software-download").click(function() {
        switch (soft_portfolio_flow.imageID) {
            case 0: {
                window.open("http://phongvcao.com/software", "_blank");

                break;
            }

            case 1: {
                window.open("http://www.mediafire.com/?40hq72meiijhk", "_blank");

                break;
            }

            case 2: {
                window.open("http://dingo-project.org/download", "_blank");

                break;
            }

            case 3: {
                window.open("http://research.stonybrook.edu/", "_blank");

                break;
            }

            case 4: {
                window.open("http://ding-project.org/", "_blank");

                break;
            }

            case 5: {
                window.open("http://phongvcao.com/", "_blank");

                break;
            }

            default: {
                window.open("http://phongvcao.com/", "_blank");

                break;
            }
        }
    }).mouseenter(function() {
        switch (soft_portfolio_flow.imageID) {
            case 0: {
                download_htmlStr = "Download Portfolio";

                break;
            }

            case 1: {
                download_htmlStr = "Download \"PathX Mini-Game\"";

                break;
            }

            case 2: {
                download_htmlStr = "Download \"Dingo Media Manager\"";

                break;
            }

            case 3: {
                download_htmlStr = "Go to \"Stony Brook Research's Website\"";

                break;
            }

            case 4: {
                download_htmlStr = "Go to \"Dingo Project's Website\"";

                break;
            }

            case 5: {
                download_htmlStr = "Go to \"Phong Cao's Personal Website\"";

                break;
            }

            default: {
                download_htmlStr = "Download this software";

                break;
            }
        }

        original_htmlStr = soft_portfolio_flow.captionDiv.innerHTML;

        soft_portfolio_flow.captionDiv.innerHTML = "<div class=\"caption\"> <div class=\"title\"> " + download_htmlStr + " </div> </div>";
    }).mouseleave(function() {
        soft_portfolio_flow.captionDiv.innerHTML = original_htmlStr;
    });


    var view_htmlStr = "View Source Code";

    $("#view-source-code").click(function() {
        switch (soft_portfolio_flow.imageID) {
            case 0: {
                window.open("https://github.com/phongvcao", "_blank");

                break;
            }

            case 1: {
                break;
            }

            case 2: {
                window.open("https://github.com/phongvcao/dingo", "_blank");

                break;
            }

            case 3: {
                break;
            }

            case 4: {
                window.open("https://github.com/phongvcao/dingoprojectorg", "_blank");

                break;
            }

            case 5: {
                window.open("https://github.com/phongvcao/phongvcaocom", "_blank");

                break;
            }

            default: {
                window.open("https://github.com/phongvcao", "_blank");

                break;
            }
        }
    }).mouseenter(function() {
        switch (soft_portfolio_flow.imageID) {
            case 0: {
                view_htmlStr = "View Source Code";

                break;
            }

            case 1: {
                view_htmlStr = "\"PathX Mini-Game\" is closed-source. <br><br> Its Source Code is available <br> upon request with the author.";

                break;
            }

            case 2: {
                view_htmlStr = "View \"Dingo Media Manager\" Source Code";

                break;
            }

            case 3: {
                view_htmlStr = "\"Stony Brook Research's Website\" is closed-source. <br><br> Its Source Code belongs to the Office of the Vice President for Research at Stony Brook University.";

                break;
            }

            case 4: {
                view_htmlStr = "View \"Dingo Project's Website\" Source Code";

                break;
            }

            case 5: {
                view_htmlStr = "View \"Phong Cao's Personal Website\" Source Code";

                break;
            }

            default: {
                view_htmlStr = "View Source Code";

                break;
            }
        }

        original_htmlStr = soft_portfolio_flow.captionDiv.innerHTML;

        soft_portfolio_flow.captionDiv.innerHTML = "<div class=\"caption\"> <div class=\"title\"> " + view_htmlStr + " </div> </div>";
    }).mouseleave(function() {
        soft_portfolio_flow.captionDiv.innerHTML = original_htmlStr;
    });
});

