var webpack = require('webpack');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ], //to load in 'app.js' file it is a entry point
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output:{  //where should it start processing the code
    path:__dirname,
    filename:'./public/bundle.js' // and export it as ''
  },
  resolve:{ //This code will find files with following endings
    root: __dirname, // it gives the path whatever we are in.
    alias:{
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      Weather: 'app/components/Weather.jsx',
      WeatherForm: 'app/components/WeatherForm.jsx',
      WeatherMessage: 'app/components/WeatherMessage',
      About: 'app/components/About.jsx',
      Examples: 'app/components/Examples.jsx',
      openWeatherMap: 'app/api/openWeatherMap.jsx'
    },
     extensions:['','.js','.jsx']
   },
   module:{ // we are telling bable-loader, take our files parse them
     loaders:[ //through react get the output and run it through es2015
       {
         loader: 'babel-loader',
         query:{
           presets:['react','es2015']
         },
         test:/\.jsx?$/,  //which files we want to apply loader to
         exclude:/(node_modules|bower_components)/  // excludes these these files
       }
     ]
   },
   devtool: 'cheap-module-eval-source-map'
 };
