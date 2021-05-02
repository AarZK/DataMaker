package com.sequoiadb.datamaker.conf;

/***
 * @Program     : DataMaker
 * @Description : configurations of SequoiaSQL
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class SsqlConf {

    public static class Auth {
        public static String URL;
        public static String USERNAME;
        public static String PASSWORD;
        public static String DRIVER;

        public static void setUrl(String url) {
            Auth.URL = url;
        }

        public static void setUsername(String username) {
            Auth.USERNAME = username;
        }

        public static void setPassword(String password) {
            Auth.PASSWORD = password;
        }

        public static void setDriver(String driver) {
            Auth.DRIVER = driver;
        }
    }
}
