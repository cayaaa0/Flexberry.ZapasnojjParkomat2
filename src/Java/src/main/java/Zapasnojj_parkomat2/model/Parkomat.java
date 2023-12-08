package Zapasnojj_parkomat2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_parkomat2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Паркомат
 */
@Entity(name = "IISZapasnojj_parkomat2Паркомат")
@Table(schema = "public", name = "Паркомат")
public class Parkomat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "НомерПарк")
    private Integer номерпарк;

    @Column(name = "ВремяОплаты")
    private String времяоплаты;

    @Column(name = "ДатаОплаты")
    private Date датаоплаты;

    @Column(name = "СтатОпл")
    private String статопл;

    @Column(name = "ВремяОкон")
    private String времяокон;

    @Column(name = "ДатаОкон")
    private Date датаокон;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Terminal")
    @Convert("Terminal")
    @Column(name = "Терминал", length = 16, unique = true, nullable = false)
    private UUID _terminalid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Terminal", insertable = false, updatable = false)
    private Terminal terminal;

    @OneToMany(mappedBy = "parkomat", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Zapis> zapiss;


    public Parkomat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getНомерПарк() {
      return номерпарк;
    }

    public void setНомерПарк(Integer номерпарк) {
      this.номерпарк = номерпарк;
    }

    public String getВремяОплаты() {
      return времяоплаты;
    }

    public void setВремяОплаты(String времяоплаты) {
      this.времяоплаты = времяоплаты;
    }

    public Date getДатаОплаты() {
      return датаоплаты;
    }

    public void setДатаОплаты(Date датаоплаты) {
      this.датаоплаты = датаоплаты;
    }

    public String getСтатОпл() {
      return статопл;
    }

    public void setСтатОпл(String статопл) {
      this.статопл = статопл;
    }

    public String getВремяОкон() {
      return времяокон;
    }

    public void setВремяОкон(String времяокон) {
      this.времяокон = времяокон;
    }

    public Date getДатаОкон() {
      return датаокон;
    }

    public void setДатаОкон(Date датаокон) {
      this.датаокон = датаокон;
    }


}