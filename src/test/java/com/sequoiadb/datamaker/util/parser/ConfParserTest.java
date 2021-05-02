package com.sequoiadb.datamaker.util.parser;

import com.sequoiadb.datamaker.model.conf.SdbConf;
import org.junit.Test;

/***
 * @Program     : DataMaker
 * @Description : test parse configurations function
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class ConfParserTest {

    @Test
    public void testParseConf() {
        ConfParser.parseConf("Z:\\garage\\DataMaker\\src\\main\\resources\\conf\\DataMaker.properties");
        ConfParser.initSdbConf();
        System.out.println(SdbConf.Auth.URL);
        System.out.println(SdbConf.Auth.USERNAME);
        System.out.println(SdbConf.Auth.PASSWORD);
    }
}
