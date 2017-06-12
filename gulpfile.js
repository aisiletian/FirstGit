'use strict';

// 导入模块
var gulp =require("gulp");

// 注册一个任务
gulp.task("copy",function(){
	// 当gulp执行这个say任务时会自动执行该函数
	gulp.src("./src/*")
		.pipe(gulp.dest("./dist/"));

	gulp.src("./src/style/*")
		.pipe(gulp.dest("./dist/style/"));
	
});

// 注册一个任务
gulp.task("dist",function(){
	// 当gulp执行这个say任务时会自动执行该函数
	gulp.watch("./src/index.html",['copy']);
});