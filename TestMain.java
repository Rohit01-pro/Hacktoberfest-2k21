package com.jsonconvert;

import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStreamReader;
import java.sql.Wrapper;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class TestMain {
    public static void main(String[] args) throws FileNotFoundException {
        final String filePath = "D:\\java programs\\json-convertor\\src\\main\\resources\\data.json";
        System.out.println("class Root {\n" + (new JSONObject(new
                BufferedReader(new InputStreamReader(new
                FileInputStream(filePath)))
                .lines()
               .collect(Collectors.joining()))
                .toMap().entrySet()
                        .stream()
                .map(entry -> {
                    StringBuilder sb = new StringBuilder("private ");
                    if (entry.getValue() instanceof Integer)
                        sb.append("int " + entry.getKey() + ";");
                    else if (entry.getValue() instanceof Double)
                        sb.append("double " + entry.getKey() + ";");
                    else if (entry.getValue() instanceof Boolean)
                        sb.append("boolean " + entry.getKey() + ";");
                    else
                        sb.append("String " + entry.getKey() + ";");
                    return sb.toString();
                }).collect(Collectors.joining("\n"))) + "\n}");
    }
}
