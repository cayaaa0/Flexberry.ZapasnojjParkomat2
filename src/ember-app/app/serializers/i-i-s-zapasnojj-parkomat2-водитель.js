import { Serializer as ВодительSerializer } from
  '../mixins/regenerated/serializers/i-i-s-zapasnojj-parkomat2-водитель';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ВодительSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
