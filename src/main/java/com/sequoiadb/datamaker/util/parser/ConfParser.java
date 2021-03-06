package com.sequoiadb.datamaker.util.parser;

import com.sequoiadb.datamaker.model.conf.*;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

/***
 * @Program     : DataMaker
 * @Description : parse configurations
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class ConfParser {

    private static Properties PROPERTIES = null;

    public static void parseConf(String confPath) {
        if (PROPERTIES == null) {
            PROPERTIES = new Properties();
            try {
                File file = new File(confPath);
                FileInputStream fileInputStream = new FileInputStream(file);
                PROPERTIES.load(fileInputStream);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public static void initSdbConf() {
        SdbConf.Auth.setUrl(PROPERTIES.getProperty("sdb.auth.url"));
        SdbConf.Auth.setUsername(PROPERTIES.getProperty("sdb.auth.username"));
        SdbConf.Auth.setPassword(PROPERTIES.getProperty("sdb.auth.password"));
    }

    public static void initSsqlConf() {
        SsqlConf.Auth.setUrl(PROPERTIES.getProperty("ssql.auth.url"));
        SsqlConf.Auth.setUsername(PROPERTIES.getProperty("ssql.auth.username"));
        SsqlConf.Auth.setPassword(PROPERTIES.getProperty("ssql.auth.password"));
        SsqlConf.Auth.setDriver(PROPERTIES.getProperty("ssql.auth.driver"));
    }

    public static void initCpConf() {
        CpConf.setMaximumPoolSize(PROPERTIES.getProperty("cp.maximumPoolSize"));
        CpConf.setMinimumIdle(PROPERTIES.getProperty("cp.minimumIdle"));
    }

    public static void initDdlConf() {
        DdlConf.Path.setJs(PROPERTIES.getProperty("ddl.path.js"));
        DdlConf.Path.setSql(PROPERTIES.getProperty("ddl.path.sql"));
    }

    public static void initResourceConf() {
        ResourceConf.setCharset(PROPERTIES.getProperty("resource.charset"));
    }

}
