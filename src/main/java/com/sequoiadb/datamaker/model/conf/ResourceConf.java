package com.sequoiadb.datamaker.model.conf;

/***
 * @Program     : DataMaker
 * @Description : configurations of data
 * @Author      : Li Zekun
 * @Since       : 2021/5/3
 **/
public class ResourceConf {

    public static String CHARSET;

    public static void setCharset(String charset) {
        ResourceConf.CHARSET = charset;
    }
}
