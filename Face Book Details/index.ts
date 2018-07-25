
class facebookDetails {
	protected profilename!: string;
	protected pageURL!: string;
	public GlobalSearchBar!: string;
	protected friends_total!: number;
	protected address!: string;
	protected Timeline!: string;
	protected contactnumber!: number;
	private birthday!: number;
	private birthmonth!: string;
	private birthyear!: number;
	protected photos!: string;
	protected friends!: string;

	constructor(profilename:string, pageURL: string, GlobalSearchBar:string, friends_total:number, address: string,Timeline:string,contactnumber:number, birthday:number, birthmonth:string, birthyear: number, photos:string, friends:string ) {
		this.profilename=profilename;
		this.pageURL = pageURL;
		this.GlobalSearchBar = GlobalSearchBar;
		this.friends_total =friends_total;
		this.address = address;
		this.Timeline = Timeline;
		this.contactnumber = contactnumber;
    this.birthday = birthday;
		this.birthmonth = birthmonth;
		this.birthyear = birthyear;
		this.photos = photos;
		this.friends = friends;
	}

	public getProfileName = () => {
		return this.profilename;
	}
	public getURL=()=>{
		return this.pageURL;
	}

	public getGlobalSearchBar=()=> {
		return this.GlobalSearchBar;
	}

	public friendsnumber=()=> {
		return this.friends_total;
	}

	public addressvalue=()=> {
		return this.address;
	}

	public timelineURL=()=> {
		return this.Timeline;
	}
	public contact=()=> {
		return this.contactnumber;
	}
	public birthdayValue=()=> {
		return this.birthday;
	}
	public getbirthmonth=()=> {
		return this.birthmonth;
	}
	public getbirthyear = () => {
		return this.birthyear;
	}
	public photosURL = () => {
		return this.photos;
	}
	public friendsURL = () => {
		return this.friends;
	}
}

var comment:any;
var i:number=0;
let NikhilMiranda = new facebookDetails("Nikhil Miranda","https://www.facebook.com/nikhil.miranda/about?lst=100001794695890%3A100001794695890%3A1532527379","nikhil miranda",1424,"the mother earth","List View",08971723022,23,"December",1998, "https://www.facebook.com/nikhil.miranda/photos?lst=100001794695890%3A100001794695890%3A1532527379&source_ref=pb_friends_tl", "https://www.facebook.com/nikhil.miranda/friends?lst=100001794695890%3A100001794695890%3A1532527379&source_ref=pb_friends_tl" );
console.log(` Profile Name : ${NikhilMiranda.getProfileName()}  \n Page URL of Video : ${NikhilMiranda.getURL() } \n Birthday : ${NikhilMiranda.birthdayValue()} ${NikhilMiranda.getbirthmonth()} ${NikhilMiranda.getbirthyear()} \n Global Search Bar : ${NikhilMiranda.getGlobalSearchBar()} \n Total Number of Friends : ${NikhilMiranda.friendsnumber()} \n Address : ${NikhilMiranda.addressvalue()} \n Timeline Type  : ${NikhilMiranda.timelineURL()} \n Contact number  : ${NikhilMiranda.contact()} \n Photos URL : ${NikhilMiranda.photosURL()} \n Friend(s) URL : ${NikhilMiranda.friendsURL()} `);




  