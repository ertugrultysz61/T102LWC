public with sharing class ContactController {
    @Auraenabled(cacheable=true)
    public static List<contact>  getContactList(){
        return [SELECT id, Name, FirstName, LastName FROM contact limit 5];
    }
}