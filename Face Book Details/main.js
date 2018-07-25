var facebookDetails = /** @class */ (function () {
    function facebookDetails(profilename, pageURL, GlobalSearchBar, friends_total, address, Timeline, contactnumber, birthday, birthmonth, birthyear, photos, friends) {
        var _this = this;
        this.getProfileName = function () {
            return _this.profilename;
        };
        this.getURL = function () {
            return _this.pageURL;
        };
        this.getGlobalSearchBar = function () {
            return _this.GlobalSearchBar;
        };
        this.friendsnumber = function () {
            return _this.friends_total;
        };
        this.addressvalue = function () {
            return _this.address;
        };
        this.timelineURL = function () {
            return _this.Timeline;
        };
        this.contact = function () {
            return _this.contactnumber;
        };
        this.birthdayValue = function () {
            return _this.birthday;
        };
        this.getbirthmonth = function () {
            return _this.birthmonth;
        };
        this.getbirthyear = function () {
            return _this.birthyear;
        };
        this.photosURL = function () {
            return _this.photos;
        };
        this.friendsURL = function () {
            return _this.friends;
        };
        this.profilename = profilename;
        this.pageURL = pageURL;
        this.GlobalSearchBar = GlobalSearchBar;
        this.friends_total = friends_total;
        this.address = address;
        this.Timeline = Timeline;
        this.contactnumber = contactnumber;
        this.birthday = birthday;
        this.birthmonth = birthmonth;
        this.birthyear = birthyear;
        this.photos = photos;
        this.friends = friends;
    }
    return facebookDetails;
}());
var comment;
var i = 0;
var NikhilMiranda = new facebookDetails("Nikhil Miranda", "https://www.facebook.com/nikhil.miranda/about?lst=100001794695890%3A100001794695890%3A1532527379", "nikhil miranda", 1424, "the mother earth", "List View", 08971723022, 23, "December", 1998, "https://www.facebook.com/nikhil.miranda/photos?lst=100001794695890%3A100001794695890%3A1532527379&source_ref=pb_friends_tl", "https://www.facebook.com/nikhil.miranda/friends?lst=100001794695890%3A100001794695890%3A1532527379&source_ref=pb_friends_tl");
console.log(" Profile Name : " + NikhilMiranda.getProfileName() + "  \n Page URL of Video : " + NikhilMiranda.getURL() + " \n Birthday : " + NikhilMiranda.birthdayValue() + " " + NikhilMiranda.getbirthmonth() + " " + NikhilMiranda.getbirthyear() + " \n Global Search Bar : " + NikhilMiranda.getGlobalSearchBar() + " \n Total Number of Friends : " + NikhilMiranda.friendsnumber() + " \n Address : " + NikhilMiranda.addressvalue() + " \n Timeline Type  : " + NikhilMiranda.timelineURL() + " \n Contact number  : " + NikhilMiranda.contact() + " \n Photos URL : " + NikhilMiranda.photosURL() + " \n Friend(s) URL : " + NikhilMiranda.friendsURL() + " ");
