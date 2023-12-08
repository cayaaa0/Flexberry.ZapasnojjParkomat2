



CREATE TABLE "Терминал"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерТер" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Запись"
(

	"primaryKey" RAW(16) NOT NULL,

	"Стоимость" FLOAT(126) NULL,

	"Автомобиль" RAW(16) NOT NULL,

	"ПаркМесто" RAW(16) NOT NULL,

	"Услуга" RAW(16) NOT NULL,

	"Паркомат" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПаркМесто"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"Статус" NVARCHAR2(8) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Услуга"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерУсл" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(13) NULL,

	"Длительность" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Паркомат"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерПарк" NUMBER(10) NULL,

	"ВремяОплаты" NVARCHAR2(255) NULL,

	"ДатаОплаты" DATE NULL,

	"СтатОпл" NVARCHAR2(11) NULL,

	"ВремяОкон" NVARCHAR2(255) NULL,

	"ДатаОкон" DATE NULL,

	"Терминал" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Автомобиль"
(

	"primaryKey" RAW(16) NOT NULL,

	"ГосНомер" NVARCHAR2(255) NULL,

	"Водитель" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Водитель"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерВод" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FАвтом_7778" FOREIGN KEY ("Автомобиль") REFERENCES "Автомобиль" ("primaryKey");

CREATE INDEX "Запись_IАвтом_8997" on "Запись" ("Автомобиль");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FПаркМ_4261" FOREIGN KEY ("ПаркМесто") REFERENCES "ПаркМесто" ("primaryKey");

CREATE INDEX "Запись_IПаркМе_910" on "Запись" ("ПаркМесто");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FУслуга_0" FOREIGN KEY ("Услуга") REFERENCES "Услуга" ("primaryKey");

CREATE INDEX "Запись_IУслуга" on "Запись" ("Услуга");

ALTER TABLE "Запись"
	ADD CONSTRAINT "Запись_FПарко_4426" FOREIGN KEY ("Паркомат") REFERENCES "Паркомат" ("primaryKey");

CREATE INDEX "Запись_IПаркомат" on "Запись" ("Паркомат");

ALTER TABLE "Паркомат"
	ADD CONSTRAINT "Паркомат_FТер_7364" FOREIGN KEY ("Терминал") REFERENCES "Терминал" ("primaryKey");

CREATE INDEX "Паркомат_IТер_2085" on "Паркомат" ("Терминал");

ALTER TABLE "Автомобиль"
	ADD CONSTRAINT "Автомобиль_FВ_6039" FOREIGN KEY ("Водитель") REFERENCES "Водитель" ("primaryKey");

CREATE INDEX "Автомобиль_IВо_132" on "Автомобиль" ("Водитель");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


