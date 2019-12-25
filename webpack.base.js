module.exports = {
    // Tell webpack to run babel on everyfile it goes through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        "@babel/react" , 
                        "@babel/env" ,
                    ]
                }
            }
        ]
    }
};