package com.sequoiadb.datamaker.model;

import com.sequoiadb.datamaker.util.ParamParser;

/***
 * @Program     : DataMaker
 * @Description : model of parameters
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class CommandParam {

    public static String confPath;

    public static void initParam(ParamParser.Args args) {
        /*
         * @Description: get parameters
         * @Param: [args]
         * @Return: void
         */
        confPath = args.confPath;
    }
}
