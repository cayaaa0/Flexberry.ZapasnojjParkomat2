import { Serializer as ПаркМестоSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zapasnojj-parkomat2-парк-место';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ПаркМестоSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
