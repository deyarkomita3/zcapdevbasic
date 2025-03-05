using ad.cap.learning as db from '../db/schema';

/**
 * 
 * serves adminititratos service
 */

service AdminService @(path:'/admin')

{
    entity Books   as projection on db.Books;
    entity Authors as projection on db.Authors;

}