// defining a class
var YouTubeDetails = /** @class */ (function () {
    function YouTubeDetails(name, URL, GlobalSearchBar, Like, Dislike, Subscription_user, Subscription_total, channelName, videopubishdate, videopublishmonth, videopublishyear, autoplay, comments) {
        var _this = this;
        this.getURL = function () {
            return _this.URL;
        };
        this.getChannelName = function () {
            return _this.channelName;
        };
        this.getVideoName = function () {
            return _this.name;
        };
        this.getdate = function () {
            return _this.videopubishdate;
        };
        this.getmonth = function () {
            return _this.videopublishmonth;
        };
        this.getyear = function () {
            return _this.videopublishyear;
        };
        this.getlikes = function () {
            return _this.Like;
        };
        this.getdislikes = function () {
            return _this.Dislike;
        };
        this.getSuscribers = function () {
            return _this.Subscription_total;
        };
        this.getcomments = function () {
            return _this.comments;
        };
        this.name = name;
        this.URL = URL;
        this.GlobalSearchBar = GlobalSearchBar;
        this.Like = Like;
        this.Dislike = Dislike;
        this.Subscription_user = Subscription_user;
        this.Subscription_total = Subscription_total;
        this.channelName = channelName;
        this.videopubishdate = videopubishdate;
        this.videopublishmonth = videopublishmonth;
        this.videopublishyear = videopublishyear;
        this.autoplay = autoplay;
        this.comments = comments;
    }
    return YouTubeDetails;
}());
var comment;
var i = 0;
var Luciana_Zogbi = new YouTubeDetails("Too Good At Goodbyes - Sam Smith Cover by Luciana Zogbi", "https://www.youtube.com/watch?v=Kt4iMM2OigY", "Luciana Zogbi goodbye", 91000, 1300, true, 1700000, "Luciana Zogbi", 26, "October", 2017, true, "Each like to this comment will be 1 day less than Luciana will take to upload another video XD");
console.log("Video Name : " + Luciana_Zogbi.getVideoName() + " \n Channel Name : " + Luciana_Zogbi.getChannelName() + "  \n URL of Video : " + Luciana_Zogbi.getURL() + " \n Video Publish Date : " + Luciana_Zogbi.getdate() + " " + Luciana_Zogbi.getmonth() + " " + Luciana_Zogbi.getyear() + " \n Likes : " + Luciana_Zogbi.getlikes() + " \n Dislike : " + Luciana_Zogbi.getdislikes() + " \n Suscribers : " + Luciana_Zogbi.getSuscribers() + " \n Comments : " + Luciana_Zogbi.getcomments());
