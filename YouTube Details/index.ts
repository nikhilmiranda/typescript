// defining a class

class YouTubeDetails {
	protected name!: string;
	protected URL!: string;
	public GlobalSearchBar!: string;
	protected Like!: number;
	protected Dislike!: number;
	protected Subscription_user!: boolean;
	protected Subscription_total!: number;
	private channelName!: string;
	private videopubishdate!: number;
	private videopublishmonth!: string;
	private videopublishyear!: number;
	protected autoplay!: boolean;
	protected comments!: string;

	constructor( name : string, URL: string, GlobalSearchBar: string, Like: number, Dislike: number, Subscription_user: boolean, Subscription_total: number, channelName: string, videopubishdate: number, videopublishmonth: string, videopublishyear: number, autoplay: boolean, comments: string ) {
		this.name=name;
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

	public getURL = () => {
		return this.URL;
	}
	public getChannelName=()=>{
		return this.channelName;
	}

	public getVideoName=()=> {
		return this.name;
	}

	public getdate=()=> {
		return this.videopubishdate;
	}

	public getmonth=()=> {
		return this.videopublishmonth;
	}

	public getyear=()=> {
		return this.videopublishyear;
	}
	public getlikes=()=> {
		return this.Like;
	}
	public getdislikes=()=> {
		return this.Dislike;
	}
	public getSuscribers=()=> {
		return this.Subscription_total;
	}
	public getcomments = () => {
		return this.comments;
	}

 // THIS IS FOR FURTHER MANIPULATIONS
/*
	public display_comments = (objectPassed?) => {
		for(let i:number=0; objectPassed.comment[i]!='\0';i++){
		   comment[i] = objectPassed.comments[i];
		}
	}


	public share = () => {
		let shareLink: any = {
			link_googleplus: "string",
			link_facebook: "string",
			link_twitter: "string",
			link_blogger: "string",
			link_reddit: "string"
		}
	}

	public addto = () => {
		let watchlater: string = this.URL;
		let customplaylist: string[] = ["https://www.youtube.com/watch?v=Kt4iMM2OigY"];
	};

	public addSuscription = (objectPassed) => {
		objectPassed.Subscription_user = true;
		objectPassed.Subscription_total = objectPassed.Subscription_total + 1;
	}

	public removeSuscription = (objectPassed) => {
		objectPassed.Subscription_user = false;
		objectPassed.Subscription_total = objectPassed.Subscription_total - 1;
	}

	public add_like = (objectPassed) => {
		objectPassed.Like = objectPassed.Like + 1;
	}

	public remove_like = (objectPassed) => {
		objectPassed.Like = objectPassed.Like - 1;
	}

	public add_dislike = (objectPassed) => {
		objectPassed.Dislike = objectPassed.Dislike + 1;
	}

	public remove_dislike = (objectPassed) => {
		objectPassed.Dislike = objectPassed.Dislike - 1;
	}

	public autoplay_on = (objectPassed) => {
		objectPassed.autoplay = true;
	}

	public autoplay_off = (objectPassed) => {
		objectPassed.autoplay = false;

	}
*/

}

var comment:any;
var i:number=0;
let Luciana_Zogbi = new YouTubeDetails("Too Good At Goodbyes - Sam Smith Cover by Luciana Zogbi","https://www.youtube.com/watch?v=Kt4iMM2OigY", "Luciana Zogbi goodbye", 91000, 1300, true, 1700000, "Luciana Zogbi", 26, "October", 2017, true, "Each like to this comment will be 1 day less than Luciana will take to upload another video XD");

console.log(`Video Name : ${Luciana_Zogbi.getVideoName()} \n Channel Name : ${Luciana_Zogbi.getChannelName()}  \n URL of Video : ${Luciana_Zogbi.getURL() } \n Video Publish Date : ${Luciana_Zogbi.getdate()} ${Luciana_Zogbi.getmonth()} ${Luciana_Zogbi.getyear()} \n Likes : ${Luciana_Zogbi.getlikes()} \n Dislike : ${Luciana_Zogbi.getdislikes()} \n Suscribers : ${Luciana_Zogbi.getSuscribers()} \n Comments : ${Luciana_Zogbi.getcomments()}`);



  