package Zapasnojj_parkomat2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_parkomat2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Терминал
 */
@Entity(name = "IISZapasnojj_parkomat2Терминал")
@Table(schema = "public", name = "Терминал")
public class Terminal {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерТер")
    private Integer номертер;


    public Terminal() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерТер() {
      return номертер;
    }

    public void setНомерТер(Integer номертер) {
      this.номертер = номертер;
    }


}