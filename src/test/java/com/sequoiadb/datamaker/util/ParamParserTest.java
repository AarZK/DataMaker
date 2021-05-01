package com.sequoiadb.datamaker.util;

import com.sequoiadb.datamaker.model.CommandParam;
import org.junit.Assert;
import org.junit.Test;

/***
 * @Program     : DataMaker
 * @Description : test parse parameters function
 * @Author      : Li Zekun
 * @Since       : 2021/5/2
 **/
public class ParamParserTest {

    @Test
    public void testInit() {
        String confPath = "../src/test.java";
        String[] args = {"-conf", confPath};
        ParamParser.parse(args);
        Assert.assertEquals(confPath, CommandParam.confPath);
    }
}
