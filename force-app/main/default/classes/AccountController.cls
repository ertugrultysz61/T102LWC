public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAllAccounts(){
        
        /*1.yol
        List<Account> accList = [SELECT id, name FROM Account];
        return accList;*/
        
        //2.yol
        return [SELECT id, name FROM Account];
        
        /*3.yol
        String sorgu = 'SELECT id, name FROM Account';
        return database.query(sorgu);*/
        
    }
    
    
}