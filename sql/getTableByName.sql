SELECT    TABLE_CATALOG AS databaseName  
        , TABLE_SCHEMA AS schemaName
        , TABLE_NAME AS tableName
        , TABLE_TYPE AS tableType
FROM     INFORMATION_SCHEMA.TABLES  
WHERE    TABLE_NAME = @tableName  
ORDER BY TABLE_NAME 