package com.sequoiadb.datamaker.model.conf;

/***
 * @Program     : DataMaker
 * @Description : configurations of DDL
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class DdlConf {

    public static class Path {
        public static String JS;
        public static String SQL;

        public static void setJs(String js) {
            Path.JS = js;
        }

        public static void setSql(String sql) {
            Path.SQL = sql;
        }
    }
}
