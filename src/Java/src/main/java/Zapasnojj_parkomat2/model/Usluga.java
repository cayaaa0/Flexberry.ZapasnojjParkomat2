package Zapasnojj_parkomat2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_parkomat2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: Услуга
 */
@Entity(name = "IISZapasnojj_parkomat2Услуга")
@Table(schema = "public", name = "Услуга")
public class Usluga {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерУсл")
    private Integer номерусл;

    @Column(name = "Наименование")
    private String наименование;

    @Column(name = "Длительность")
    private String длительность;


    public Usluga() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерУсл() {
      return номерусл;
    }

    public void setНомерУсл(Integer номерусл) {
      this.номерусл = номерусл;
    }

    public String getНаименование() {
      return наименование;
    }

    public void setНаименование(String наименование) {
      this.наименование = наименование;
    }

    public String getДлительность() {
      return длительность;
    }

    public void setДлительность(String длительность) {
      this.длительность = длительность;
    }


}