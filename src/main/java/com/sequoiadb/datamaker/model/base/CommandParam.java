package com.sequoiadb.datamaker.model.base;

import com.sequoiadb.datamaker.util.parser.ParamParser;

/***
 * @Program     : DataMaker
 * @Description : model of parameters
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class CommandParam {

    public static String CONF_PATH;

    public static void initParam(ParamParser.Args args) {
        CONF_PATH = args.confPath;
    }
}
