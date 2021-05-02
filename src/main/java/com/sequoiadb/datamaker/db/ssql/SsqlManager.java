package com.sequoiadb.datamaker.db.ssql;

import com.sequoiadb.datamaker.model.conf.CpConf;
import com.sequoiadb.datamaker.model.conf.SsqlConf;
import com.sequoiadb.datamaker.util.parser.ConfParser;
import com.sequoiadb.datamaker.util.parser.ParamParser;
import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

import java.sql.Connection;
import java.sql.SQLException;

/***
 * @Program     : DataMaker
 * @Description : manage jdbc connections
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class SsqlManager {

    private static HikariDataSource hikariDataSource;

    public static void initConf() {
        ConfParser.parseConf(ParamParser.CONF_PATH);
        ConfParser.initSsqlConf();
        ConfParser.initCpConf();
    }

    public static void initCp() {
        HikariConfig hikariConfig = new HikariConfig();

        initConf();

        hikariConfig.setJdbcUrl(SsqlConf.Auth.URL);
        hikariConfig.setUsername(SsqlConf.Auth.USERNAME);
        hikariConfig.setPassword(SsqlConf.Auth.PASSWORD);
        hikariConfig.setDriverClassName(SsqlConf.Auth.DRIVER);

        hikariConfig.setMaximumPoolSize(CpConf.MAXIMUM_POOL_SIZE);
        hikariConfig.setMinimumIdle(CpConf.MINIMUM_IDLE);

        hikariDataSource = new HikariDataSource(hikariConfig);
    }

    public static Connection getConnection() {
        Connection connection = null;
        try {
            connection = hikariDataSource.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return connection;
    }

    public static void releaseConnection(Connection connection) {
        try {
            if (!connection.isClosed()) {
                connection.close();
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void closeDataSource() {
        if (!hikariDataSource.isClosed()) {
            hikariDataSource.close();
        }
    }
}
