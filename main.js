var compress_images = require('compress-images');
var InputPath = 'imagens/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}';
var OutputPath = 'build/img/';

var jpgOptions = {jpg: {engine: 'mozjpeg', command: ['-quality', '30']}};
var pngOptions = {png: {engine: 'pngquant', command: ['--quality=20-50']}};
var svgOptions = {svg: {engine: 'svgo', command: '--multipass'}};
var gifOptions = {gif: {engine: 'gifsicle', command: ['--colors', '64', '--use-col=web']}};

compress_images(InputPath, OutputPath, {compress_force: false, statistic: true, autoupdate: true}, false,
  jpgOptions,
  pngOptions,
  svgOptions,
  gifOptions, 
  callBackCompressao);

  
function callBackCompressao(error, completed, statistic){
  console.log('-------------');
  // console.log(error);
  console.log(completed);
  console.log(statistic);
  console.log('-------------'); 
}


const tinify = require("tinify");
tinify.key = "48XJ42QfnrDj5ssTl92zknrvkL9RGK2S";

const source = tinify.fromFile("imagens/fundo.jpeg");
source.toFile("imagens/fundo_result.jpeg");

console.log('Compressão finalizada.')