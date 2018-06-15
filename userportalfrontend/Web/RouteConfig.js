var myApp=angular.module("myApp",['ngRoute','ngCookies']);

myApp.config(function($routeProvider)
		{
			alert("I am route module")
			$routeProvider.when("/",{templateUrl:"/index.html"})
			.when("/login",{templateUrl:"c_user/Login.html"})
			.when("/register",{templateUrl:"c_user/Register.html"})
			.when("/aboutus",{templateUrl:"pages/AboutUs.html"})
			.when("/contactus",{templateUrl:"pages/ContactUs.html"})
			.when("/blog",{templateUrl:"c_blog/Blog.html"})
			.when("/showBlog",{templateUrl:"c_blog/ShowAllBlog.html"})
			.when("/AdminBlog",{templateUrl:"c_blog/AdminBlog.html"})
			.when("/myBlog",{templateUrl:"c_blog/MyBlog.html"})
			.when("/AddForum",{templateUrl:"c_forum/Forum.html"})
			.when("/ShowForum",{templateUrl:"c_forum/ShowForum.html"});
			when("/chat",{templateUrl:"c_chat/chat.html"});
		});