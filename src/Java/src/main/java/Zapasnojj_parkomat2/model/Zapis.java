package Zapasnojj_parkomat2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Zapasnojj_parkomat2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Запись
 */
@Entity(name = "IISZapasnojj_parkomat2Запись")
@Table(schema = "public", name = "Запись")
public class Zapis {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Стоимость")
    private Double стоимость;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Avtomobil")
    @Convert("Avtomobil")
    @Column(name = "Автомобиль", length = 16, unique = true, nullable = false)
    private UUID _avtomobilid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Avtomobil", insertable = false, updatable = false)
    private Avtomobil avtomobil;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "ParkMesto")
    @Convert("ParkMesto")
    @Column(name = "ПаркМесто", length = 16, unique = true, nullable = false)
    private UUID _parkmestoid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "ParkMesto", insertable = false, updatable = false)
    private ParkMesto parkmesto;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Usluga")
    @Convert("Usluga")
    @Column(name = "Услуга", length = 16, unique = true, nullable = false)
    private UUID _uslugaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Usluga", insertable = false, updatable = false)
    private Usluga usluga;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Parkomat")
    @Convert("Parkomat")
    @Column(name = "Паркомат", length = 16, unique = true, nullable = false)
    private UUID _parkomatid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Parkomat", insertable = false, updatable = false)
    private Parkomat parkomat;


    public Zapis() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Double getСтоимость() {
      return стоимость;
    }

    public void setСтоимость(Double стоимость) {
      this.стоимость = стоимость;
    }


}