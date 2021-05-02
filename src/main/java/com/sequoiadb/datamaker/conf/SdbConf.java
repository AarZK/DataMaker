package com.sequoiadb.datamaker.conf;

/***
 * @Program     : DataMaker
 * @Description : configurations of SequoiaDB
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class SdbConf {

    public static class Auth {
        public static String URL;
        public static String USERNAME;
        public static String PASSWORD;

        public static void setUrl(String url) {
            URL = url;
        }

        public static void setUsername(String username) {
            USERNAME = username;
        }

        public static void setPassword(String password) {
            PASSWORD = password;
        }
    }
}
