package com.sequoiadb.datamaker.model.conf;

/***
 * @Program     : DataMaker
 * @Description : configurations of connection pool(hikari)
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class CpConf {

    public static int MAXIMUM_POOL_SIZE;
    public static int MINIMUM_IDLE;

    public static void setMaximumPoolSize(String maximumPoolSize) {
        MAXIMUM_POOL_SIZE = Integer.parseInt(maximumPoolSize);
    }

    public static void setMinimumIdle(String minimumIdle) {
        MINIMUM_IDLE = Integer.parseInt(minimumIdle);
    }
}
