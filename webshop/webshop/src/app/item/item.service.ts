import { Injectable } from '@angular/core';
import { Item } from './item.model';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // items: Item[] = [{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5PoAAOSwx7JdjhDm/s-l225.webp","title":"Laptop PC Laptop Notebook HP 255 g7 15,6\" 8gb SSD 256gb Windows 10","price":"$423.76","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xU4AAOSwUQle0DVB/s-l225.webp","title":"Lenovo Thinkpad X240 Laptop Core i5 Turbo 2.9Ghz 8GB Ram 1TB Rapid SSD Options","price":"$190.56 to $491.32","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/knIAAOSw4FVevngA/s-l225.webp","title":"Lenovo Laptop Notebook 15,6\" AMD RAM 8gb SSD 256gb Webcam Windows 10","price":"$353.12","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/f10AAOSwgS9dGhSG/s-l225.webp","title":"Lenovo laptop 15,6\" Laptop AMD a4 4gb SSD 256gb Webcam Windows 10","price":"$297.78","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/F1UAAOSws3xfIMxI/s-l225.webp","title":"New ListingCHEAP FAST WINDOWS 10 LAPTOP CORE i3 4/8GB RAM 500GB HDD 256GB SSD WIFI WARRANTY","price":"$181.48 to $298.15","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9okAAOSwWjtfIpiR/s-l225.webp","title":"New ListingWIN 10 laptop Toshiba Satellite PRO R50-B / i5-4210U 4gb, 500gb, usb 3.0, 15.6''","price":"$168.51","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Fv8AAOSwB6Zcqfpv/s-l225.webp","title":"Lenovo ThinkPad T460s Core i5-6300U 8Gb 128Gb SSD 14``1920x1080 IPS Webcam W10 B","price":"$352.96","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0fsAAOSwySZb~q0d/s-l225.webp","title":"Panasonic Toughbook CF-19 Mk4 Core i5 1.2GHz 4GB 500GB HDD Windows 10 Pro GPS ","price":"$311.11","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/PHYAAOSw9GJfHxE5/s-l225.webp","title":"New Listing£191 ex VAT HP Laptop, i5 6th Gen, 15.6 Inches, 4GB RAM, 500GB HDD with Charger","price":"$296.86","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7IwAAOSw6WxfIF3h/s-l225.webp","title":"New Listing£333 ex VAT Lenovo ThinkPad Laptop T540p i7 8GB RAM 500GB SSD Solid State Drive","price":"$517.24","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WZgAAMXQmb9Q36Vo/s-l225.webp","title":"New ListingDell Latitude 5500 i7-8665U 256GB PCIe 8GB FHD CMRA BT W10P BKLT FP SC NBD WTY","price":"$1,079.99","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/B7gAAOSwODZfIiN0/s-l225.webp","title":"New ListingLenovo ThinkPad T470 14\" Laptop Core i5-6200U 2.3GHz 8GB RAM 256GB SSD Win10 Pr","price":"$350.00","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5h4AAOSwqAFfIiI5/s-l225.webp","title":"New ListingLenovo ThinkPad T470 14\" Laptop Core i5-6200U 2.3GHz 16GB RAM 250GB SSD Win10 Pr","price":"$380.00","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/uW4AAOSwUIle3mJ9/s-l225.webp","title":"New ListingDell E6230 12\" Home/Office Laptop, i5-3320M 2.6Ghz, 4Gb RAM 320Gb HDD Win 10 Pro","price":"$181.48","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/F1UAAOSws3xfIMxI/s-l225.webp","title":"CHEAP FAST WINDOWS 10 LAPTOP CORE i3 8GB RAM 500GB HDD 256GB SSD WIFI WARRANTY","price":"$181.48 to $298.15","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7wgAAOSwCctfHH0y/s-l225.webp","title":"CHEAP 12.5-15.6\" WINDOWS 10 LAPTOP CORE i3 i5 4GB/8GB RAM & 128/256GB SSD OPTION","price":"$81.66 to $324.07","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hmcAAOSw99ddYm-U/s-l225.webp","title":"CHEAP FAST DUAL CORE LAPTOP WINDOWS 7 or 10 OS, 2GB 3GB 4GB RAM WITH WARRANTY","price":"$84.25 to $278.70","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xH4AAOSwZutfINGC/s-l225.webp","title":"CHEAP FAST WINDOWS 10 LAPTOP CORE i5 8GB RAM 500GB HDD 256GB SSD WIFI WARRANTY","price":"$207.40 to $324.07","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GOoAAOSwyKhesSxu/s-l225.webp","title":"Notebook CHUWI HeroBook Pro Laptop Windows 14.1 \"Notebook Boardless 8+256GB","price":"$269.99","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZmoAAOSwFd9c-Tr4/s-l225.webp","title":"Lenovo ThinkPad T450s Core i5 8Gb 128Gb 14``FHD SSD 1920x1080 IPS Cam W10","price":"$294.09","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~O8AAOSw1kpeIHWk/s-l225.webp","title":"DELL XPS 13 7390 LAPTOP CORE I7 10510U 16GB DDR3 500GB SSD FHD SILVER H5L3Z2","price":"$1,263.94","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VMMAAOSwkB1ewuLR/s-l225.webp","title":"New ListingLenovo ThinkPad T430 14.1\" laptop i5-3210m 2.5Ghz, 4Gb RAM, 500Gb HDD, Win 10 ","price":"$207.40","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mJcAAOSwnhFefHZx/s-l225.webp","title":"Notebook CHUWI HeroBook Pro Laptop Windows 14.1 \"Notebook Bordo stretto 8+256GB","price":"$289.64 to $317.90","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/nfYAAOSwmjVfIo2X/s-l225.webp","title":"New ListingASUS k550g Notebook Laptop i7 12 GB RAM 512 gb SSD 1 Year Warranty","price":"$705.29","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zvkAAOSwNYBc7lIN/s-l225.webp","title":"New ListingAcer Chromebook 14 Laptop | Silver- 14\" -Celeron - 4GB RAM - 32GB eMMC -Grade A-","price":"$207.40","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/IP4AAOSwd1JehEO0/s-l225.webp","title":"CHUWI Lapbook Pro Notebook 14,1 pollici Laptop Windows10 RAM 8+256GB SSD 2,4 GHz","price":"$353.22 to $365.00","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9bcAAOSwGOVfIpSu/s-l225.webp","title":"New ListingASUS Laptop Notebook PC Laptop x502ca 15.6\" Intel 1.1ghz hdd320gb 12gb Win 10","price":"$210.76","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/2eQAAOSwJBdd6oLj/s-l225.webp","title":"New ListingDell INSPIRON 7591 9TH GEN GAMING CORE i5 9300H 8GB 250GB 3GB GTX1050 FHD SL0JX2","price":"$939.85","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/e7UAAOSwwmpekLx7/s-l225.webp","title":"ASUS Notebook 15.6\" a9-9425 8gb SSD 256gb win10 m509ba-br001t laptop","price":"$494.41","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/N5YAAOSw0n5fIm9w/s-l225.webp","title":"New ListingLenovo C340 Chromebook 11.6\" Convetible Laptop Intel Celeron N4000 4GB RAM 32GB ","price":"$291.67","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/900AAOSwQ6FdO7vN/s-l225.webp","title":"Notebook 15,6\" Laptop HP AMD ryzen 5 3500U 8GB 512GB SSD DVD Fullhd Win 10","price":"$561.64","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/j5MAAOSwHEpfIGfY/s-l225.webp","title":"New Listing£416 ex VAT Lenovo ThinkPad W541 i7 8GB RAM 500GB SSD Nvidia Gaming Laptop","price":"$646.88","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gxkAAOSwRQNfDdCr/s-l225.webp","title":"New Listing15.6\" Lenovo G505s Laptop AMD A10 up to 3.5GHz Radeon 8GB 1000GB Windows 10","price":"$460.20","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/VWwAAOSw219e0Aec/s-l225.webp","title":"New Listing15.6\" HP Pavilion 15 Laptop AMD A10 up to 2.8GHz Quad 1000GB 8GB Radeon Win10","price":"$486.13","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5PoAAOSwx7JdjhDm/s-l225.webp","title":"Laptop PC Laptop Notebook HP 255 g7 15,6\" 4gb SSD 256gb Windows 10","price":"$376.67","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/GdMAAOSwSNRe0kmx/s-l225.webp","title":"New Listing15.6\" Lenovo Z585 Laptop AMD A8 up to 2.8GHz 8GB 240GB SSD Radeon Windows 10 ","price":"$460.20","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/n64AAOSw3jhfDcjy/s-l225.webp","title":"Lenovo Notebook 15,6\" Laptop Intel i5 1035G1 8GB 256GB SSD HD Screen Win 10","price":"$528.68","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0N8AAOSwtzle7KvA/s-l225.webp","title":"New Listing15.6\" MSI GX60 Laptop A10 up to 3.2GHz Quad 16GB 240SSD + HDD Radeon Win10","price":"$641.69","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xH4AAOSwZutfINGC/s-l225.webp","title":"New ListingCHEAP FAST WINDOWS 10 LAPTOP CORE i5 4/8GB RAM 500GB HDD 256GB SSD WIFI WARRANTY","price":"$207.40 to $324.07","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bhYAAOSwIFFe4YnD/s-l225.webp","title":"CHEAP FAST DUAL CORE, I3 I5 I7 LAPTOP WINDOWS 7 or 10 4GB 8GB 16GB RAM SSD & HDD","price":"$142.59 to $285.18","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/NjcAAOSwhe1e5yH7/s-l225.webp","title":"Laptop 15,6\" Lenovo V155 AMD ryzen 3 3200U 4GB DDR4 1TB HDD Win10 Laptop","price":"$382.55","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/i4sAAOSweYhfInml/s-l225.webp","title":"New ListingHP 250 G6 Laptop Core i3-6006U 4GB RAM 500GB HDD 15.6\" Display Windows 10 ","price":"$207.39","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ShwAAOSw5S5fInCZ/s-l225.webp","title":"New ListingLenovo Ideapad S340 14\" Light Weight Laptop Intel Core i3-1005G1 8GB RAM 256GB ","price":"$518.53","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/CiwAAOSwmAZe5orY/s-l225.webp","title":"NEW! HP 15.6\" HD TouchScreen Laptop Intel Core i5-1035G1 512GB SSD Drive 8GB Ram","price":"$637.75","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WsoAAOSwc65exP1c/s-l225.webp","title":"Panasonic toughpad fz-g1-mk1, Core i5-3437u, 1.9ghz, 4gb, 128gb ssd win10 lan","price":"$354.04","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cokAAOSwJZVesOEg/s-l225.webp","title":"CHUWI Hi10 X Tablet/Laptop Convertibile Stylus 3 IN 1 Windows Intel 6+128G EMMC","price":"$223.70 to $294.35","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4PcAAOSwi8pfHpTr/s-l225.webp","title":"Lenovo ThinkPad T540p Intel Quad Core i7-4710MQ 2,9GHz 16GB RAM is 256GB SSD NVIDIA","price":"$387.38","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/XuYAAOSwAQxewaHB/s-l225.webp","title":"Dell Latitude E6430 Laptop Core i5 2.6Ghz 4GB 250Gb 14\"@1600x900 WiFi PSU Win 10","price":"$167.23","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tW8AAOSwqgFeOxg4/s-l225.webp","title":"New ListingCLEVO N850 15.6\" Gaming Laptop Intel i7 Quad 12GB 240GB SSD + 500GB GTX 1050Ti","price":"$1,030.60","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SKYAAOSwovNe6p1~/s-l225.webp","title":"Lenovo IdeaPad 3 15.6\" Laptop Intel Core i3 8GB Memory 256GB SSD - Blue - NEW","price":"$398.85","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6nAAAOSwjVReaKPQ/s-l225.webp","title":"HP Elitebook 840 G3 Touch 14 \" FHD Laptop Black i5 2x2,4GHz 8GB 500GB HDD Win10","price":"$589.31","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9vIAAOSw69teF-gt/s-l225.webp","title":"CHUWI HeroBook Pro Laptop Windows 10 Intel 14.1\" Boardless Notebook 8+256G","price":"$269.99 to $285.99","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OKYAAOSwA8tfGJY0/s-l225.webp","title":"New ListingHP Envy Laptop m6-1310sa AMD A10-5750M 1TB HDD 8GB RAM Beats Audio Windows 8","price":"$193.16","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mU8AAOSwYVVfCJDv/s-l225.webp","title":"Lenovo ThinkPad T440s 14\" Ultrabook with Intel i5 4200U 8GB RAM is 256GB SSD","price":"$259.04","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aEUAAOSw7Bde61yW/s-l225.webp","title":"New ListingDell INSPIRON 7591 2in1 10TH GEN CORE i7 10510U 16GB 500GB MX250 UHD TOUC TXSKW2","price":"$1,069.49","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7YwAAOSw6KJe8vto/s-l225.webp","title":"CHUWI AeroBook Plus 15.6\" Laptop Windows 4K Intel i5-6287U Ultra Portati 8+256GB","price":"$647.59","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/knIAAOSw4FVevngA/s-l225.webp","title":"Laptop Notebook Lenovo 15,6 \" AMD RAM 8GB SSD 256GB Webcam Windows 10","price":"$372.30","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gwUAAOSwq3Feihh7/s-l225.webp","title":"Toshiba Laptop Tecra Z40-B i7-5600U 2.60GHZ 8GB 240GB SSD 14'' HD+ Win 10 Pro","price":"$453.71","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zXYAAOSwd1pe8y1H/s-l225.webp","title":"CHEAP FAST WINDOWS 10 LAPTOP NETBOOK NOTEBOOK WIRELESS Wi-Fi 4GB RAM 320GB HDD","price":"$129.62","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/62sAAOSwz3Je1zii/s-l225.webp","title":"CHUWI HeroBook Pro Portátiles y Netbooks 1920*1080 IPS 8+256G SSD Laptop Windows","price":"$294.35 to $313.19","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lPoAAOSw2QZe1Avb/s-l225.webp","title":"Lenovo ThinkPad T440P, Intel i7-4810MQ,16GB Ram spots, 256GB SSD, Win10Pro, Display Choice","price":"$363.83","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/o6wAAOSwjZxfIN62/s-l225.webp","title":"CHEAP FAST DUAL CORE LAPTOP WINDOWS 10 or 7 OS, 2GB, 4GB, 6GB, 8GB SPEC WARRANTY","price":"$84.25 to $324.07","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xaEAAOSweoReTw~2/s-l225.webp","title":"Dell Latitude E6430 Laptop 14\" Intel i5 Turbo 2.9GHz, 16GB RAM, 256GB SSD Deals","price":"$452.43","category":"laptops"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kTsAAOSw54Nd5WRl/s-l225.webp","title":"Huawei p30 Lite Dual SIM 4gb RAM 128gb-Midnight Black 24 months guarantee Italy","price":"$223.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/dUcAAOSwqilfB8PR/s-l225.webp","title":"Umidigi Power 4gb+64gb Android 9.0 5150mah Smartphone NFC Phones offers","price":"$105.96","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OdYAAOSwyyleoEX3/s-l225.webp","title":"Huawei p40 Lite Midnight Black 128 GB 6 GB RAM Display 6,4\" - No Google services","price":"$211.93","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k~IAAOSwhe1e2fqC/s-l225.webp","title":"Umidigi a7 Pro 4gb+64gb/128gb Android Smartphone 10 6.3\" Smart Phone","price":"$132.10 to $164.83","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kr8AAOSwWp9eoEp7/s-l225.webp","title":"Huawei p40 Lite Crush Green 128gb ROM Display 6,4\" Android-No Google services","price":"$223.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4b0AAOSwiA9djGJY/s-l225.webp","title":"Apple iPhone 8 Plus Gold 64GB 256GB 4G LTE Unlocked Smartphone SIM Free","price":"$569.08 to $685.73","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YX8AAOSwkX5diia0/s-l225.webp","title":"IPhone 7 Refurbished 128gb Grade B Black White Rose Gold Red Apple regenerated","price":"$223.70","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/eUcAAOSwQApeKchR/s-l225.webp","title":"Xr Apple iPhone 64gb new + Invoice +8 accessories gift","price":"$575.77","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/WXMAAOSw7sJdkdPE/s-l225.webp","title":"Umidigi f1 Android 9.0 Smartphone 6.3\" 128gb+4gb Mobile Phone NFC 2sim","price":"$129.51","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wJwAAOSw~MZdsFIN/s-l225.webp","title":"Apple iPhone 11 64gb Italy Black Black LTE NEW Original Smartphone iOS 13","price":"$806.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/M-cAAOSwxIld5WMx/s-l225.webp","title":"Huawei P Smart 2019 Midnight Black 64 GB ROM 3 GB RAM Display 6.21\" DUAL SIM","price":"$164.83","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/k0wAAOSwkLhaHCGL/s-l225.webp","title":"Apple iPhone 7 - 32GB 128GB 256GB - Unlocked SIM Free Smartphone Colours Grades","price":"$181.42 to $259.21","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/lz4AAOSwi7RfBuyP/s-l225.webp","title":"Google pixel 3 XL 64GB just black, mint condition, screen burn - in","price":"$234.31","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/V3YAAOSw9D1ehgLM/s-l225.webp","title":"New ListingSamsung Galaxy S7 Edge SM-G930P Factory Unlocked Phone 64 GB, International Ver.","price":"$185.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OQgAAOSwKW1ev0dT/s-l225.webp","title":"Kyocera DuraXE E4710 -PTT - AT&T LTE 4G RUGGED  5MP FLIP PHONE LAST ONE! HURRY!","price":"$399.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hQkAAOSwH-Ve3Akp/s-l225.webp","title":"≣ ERICSSON T68i BRAND NEW vintage rare phone mobile ","price":"$169.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/59cAAOSw-NpewaoG/s-l225.webp","title":"NOKIA 9000 RAK-1N MOD. A vintage rare original phone mobile communicator","price":"$185.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JkEAAOSwDXldxd~l/s-l225.webp","title":"Samsung SGH P300 - Black (Unlocked) Mobile Phone With Pouch","price":"$155.55","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/saMAAOSwxOJe4KJj/s-l225.webp","title":"Xiaomi Redmi Note 9 Midnight Grey 128 GB 4 GB RAM Full HD Display 6.53\" Android","price":"$195.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pqkAAOSwVRBb9TjJ/s-l225.webp","title":"Apple iPhone 7 - 32GB/128GB/256GB - All Colours - UNLOCKED - Various Grades ","price":"$220.37 to $272.22","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5-EAAOSwvhte7BYe/s-l225.webp","title":"Umidigi f1 Android 9.0 6.3 Zoll FHD + 128gb+4gb Smartphone Mobile Phone NFC","price":"$148.35","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0bkAAOSw57BdAIE6/s-l225.webp","title":"Apple iPhone 7 32GB 128GB 256GB Unlocked  Smartphone GSM All Colors","price":"$298.04 to $376.85","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/FkoAAOSwQvhd5WYN/s-l225.webp","title":"Xiaomi Redmi Note 8t Dual SIM 64gb ROM 4 GB RAM Starscape Blue Display 6.3\" Full","price":"$188.38","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~HoAAOSwAy5e8fNS/s-l225.webp","title":"Huawei P Smart 2020 Aurora Blue 128 GB ROM 4 GB RAM Dual SIM Android","price":"$188.38","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZooAAOSw~cRev~sH/s-l225.webp","title":"Sony Xperia XZ2 H8216 64GB Unlocked 4G LTE Android Smartphone Excellent Device","price":"$233.33","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/z0AAAOSw53hbtDto/s-l225.webp","title":"ASUS ROG Phone ZS600KL 8GB/128GB 6\" Smartphone Factory Unlocked","price":"$499.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/cAkAAOSwcp9e4J5A/s-l225.webp","title":"Xiaomi Redmi Note 9 Forest Green 128gb ROM 4gb RAM Full HD Display 6.53\" Android","price":"$195.44","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LMMAAOSwf2dfIoD3/s-l225.webp","title":"New ListingInmarsat IsatPhone Pro Blue Gray Satellite Phone ","price":"$388.91","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zUkAAOSwlvtdeSqY/s-l225.webp","title":"LG V50 ThinQ - 128GB -5G  Aurora Black (Sprint) A stock GSM Unlocked Read Note","price":"$269.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/OYIAAOSwlEZeyRDY/s-l225.webp","title":"Samsung Galaxy S7 Edge G935F 32GB (Unlocked) Smart Phone PLEASE READ DESCRIPTION","price":"$110.18","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/pNsAAOSwCaJe-wE3/s-l225.webp","title":"6.7in Smartphone 8+512GB Dual SIM Android 10 Facial Recognition Mobile Phones","price":"$114.62","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/i5AAAOSwYgle-NJt/s-l225.webp","title":"New Samsung Galaxy A21s Dual Sim 2020 4G LTE 32GB Smartphone Black Blue Red","price":"$207.39","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9LMAAOSw4mReXRMq/s-l225.webp","title":"Essential Phone PH-1 128GB 4GB Ram Black / White (Unlocked) ","price":"$147.78 to $168.51","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/AFkAAOSwja5eqewP/s-l225.webp","title":"Samsung Galaxy S20 4G Smartphone 128GB Sim-Free Unlocked - (Cloud Blue) B+","price":"$777.54","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qpsAAOSwnRJbexVC/s-l225.webp","title":"New iPhone 5 Black 32GB Apple Brand Unlocked Sim Free Smart Phone Sealed Boxed","price":"$154.27","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/6sUAAOSwk1RdnhHg/s-l225.webp","title":"brand new V50S LM-V510N latest mobile phone from LG with Dual Screen","price":"$549.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xWEAAOSwFOleJ03J/s-l225.webp","title":"GOOGLE PIXEL 2 XL 128GB / 64GB - UNLOCKED Just Black / Black & White Smartphone ","price":"$206.12 to $257.97","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/22YAAOSwclheLuFb/s-l225.webp","title":"BRAND NEW NOKIA E72 - 5MP CAMERA - 3G - WIFI - METAL GREY - BOXED - UNBRANDED","price":"$97.21","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qzQAAOSwppdewad7/s-l225.webp","title":"NOKIA 9000 RAK-1N MOD. A vintage rare original phone mobile communicator","price":"$185.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/we8AAOSw93Ncy3eZ/s-l225.webp","title":"Motorola RAZR V3 - Pink (Unlocked) Mobile Phone","price":"$134.81","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DkUAAOSw81RfIkUq/s-l225.webp","title":"New ListingSAMSUNG S9+ PLUS SM-G965U 64GB BLUE FOR METRO OR T-MOBILE BEST DEAL ON SALE ","price":"$249.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0IcAAOSw-Ehd3Es5/s-l225.webp","title":"NEW SAMSUNG GALAXY A10S A20S A30S 64GB A01 A11 A20 A10 2019 Dual SIM Smartphone","price":"$121.84 to $243.71","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wJwAAOSw~MZdsFIN/s-l225.webp","title":"Apple iPhone 11 128gb Italy Black Black LTE NEW Original Smartphone iOS 13","price":"$882.97","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5ZsAAOSwDuleEg3R/s-l225.webp","title":"LG G8X ThinQ LMG850UM9 - 128GB - Black (Sprint T-mobile AT&T) 9/10 GSM Unlocked","price":"$259.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/KaAAAOSwltNeaLcN/s-l225.webp","title":"SAMSUNG GALAXY A6 (2018) A600F - Unlocked - Smartphone Mobile Phone","price":"$123.15 to $162.04","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/3qMAAOSwMkReqpkP/s-l225.webp","title":"OPPO a9 (2020) 128 GB ROM 4 GB RAM LTE Dual SIM 6.5\" HD Display Marine Green","price":"$211.93","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ZdcAAOSwL0pfF7Di/s-l225.webp","title":"Note10pro Smart Phone 6.8in HD Camera Dual SIM Android 10 Face Unlock 8GB+512GB","price":"$104.99","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0qoAAOSwCZRfIpsr/s-l225.webp","title":"New ListingApple iPhone 7 256GB Single SIM (Unlocked) Smartphone - Black","price":"$194.45","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5ZsAAOSwDuleEg3R/s-l225.webp","title":"LG G8X ThinQ LMG850UM9 - 128GB - Black (Sprint T-mobile AT&T) 7/10  GSM Unlocked","price":"$235.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ekgAAOSwdllc5sSV/s-l225.webp","title":"Samsung galaxy a20e 5.8\" 32gb+3gb RAM ITALIA NEW 4g Dual Sim Smartphone Black","price":"$164.73","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SkcAAOSwtAlbqsuF/s-l225.webp","title":"LG G7 ThinQ 64GB Smartphone (GSM Unlocked) - Platinum Grey Very Good","price":"$140.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/M50AAOSwqYxdJMwk/s-l225.webp","title":"Apple iPhone 6 16GB Unlocked Various Colours","price":"$58.34 to $110.19","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bG8AAOSwCD5e3Oo3/s-l225.webp","title":" Samsung Galaxy S7 32GB Unlocked Android Mobile Phone Varies Colors & Grade","price":"$174.99 to $181.48","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/YhAAAOSwFEheAG9H/s-l225.webp","title":"Blackview 5,7\" BV6800 Pro Smartphone 4GB+64GB IP68 IP69K Gesichts-ID FHD 16.0MP","price":"$192.67","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BqQAAOSwVp1eumwF/s-l225.webp","title":"Xiaomi Redmi Note 9s Dual SIM 128gb+6gb RAM 4g LTE 6.67\" Aurora Blue Global","price":"$258.92","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/b5gAAOSwtrJbMPrH/s-l225.webp","title":"New ListingOriginal HTC 10 evo 4G LTE 32GB 5.5\" GPS Wifi 16MP Android Unlocked Smart Phone","price":"$107.77","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LpMAAOSwlndZKCYs/s-l225.webp","title":"Siemens CL50 / 8008 Micro Handy Telefon \"World Smallest Phone\" Full Package NEW!","price":"$399.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/jB8AAOSwyVZe3Auh/s-l225.webp","title":"≣ ERICSSON T200 BRAND NEW vintage rare phone mobile ","price":"$99.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/J34AAOSwj8hfBiOE/s-l225.webp","title":"ERICSSON A1018s COCA-COLA mobile vintage rare phone NEW","price":"$105.00","category":"phones"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/5H0AAOSw-TFd8awX/s-l225.webp","title":"Luxury Men Watch Business Stainless Steel Date Sport Analog Quartz Wrist Watch","price":"$8.61 to $9.23","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qo0AAOSwENVdkCzN/s-l225.webp","title":"Fashion Sport Men's Stainless Steel Case Leather Band Quartz Analog Wrist Watch","price":"$0.99 to $4.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/xp4AAOSwV7ZensfJ/s-l225.webp","title":"Men's Watch Pobeda Pilot Soviet USSR Mechanical ZIM WristWatch MILITARY","price":"$78.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/aJIAAOSw7kFeeHDR/s-l225.webp","title":"Luxury New Geneva Women Watch Stainless Steel Men's Quartz Analog Wrist Watches","price":"$2.49 to $4.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JgUAAOSwb2JbnLX7/s-l225.webp","title":"Fashion Men's Analog Quartz Stainless Steel Watches Leather Band Wrist Watch","price":"$1.59 to $4.59","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/naEAAOSwKeBfK1yx/s-l225.webp","title":"Citizen White Dial Quartz Watch Silver Tone Diamond Accents Bezel","price":"$40.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/vcgAAOSwWWdd~HT~/s-l225.webp","title":"MIDO GREAT WALL DAY/DATE AUTOMATIC MEN'S WATCH M0176311103700, MSRP: $1,490","price":"$102.50","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/yYAAAOSwZtNb8tRu/s-l225.webp","title":"RUSSIAN VOSTOK KOMANDIRSKIE 431171 popular MILITARY WRIST WATCH NEW","price":"$39.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iTYAAOSw9T9dJj7Y/s-l225.webp","title":"RUSSIAN  VOSTOK AMPHIBIA 960761 NEPTUN MILITARY AUTO WRIST WATCH NEW","price":"$129.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/1rsAAOSwHYRfKuIF/s-l225.webp","title":"Wenger Swiss Military 7900X Men’s Quartz Watch Day Date New Battery Silicone","price":"$29.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9k0AAOSwQVFexke5/s-l225.webp","title":"POBEDA Soviet Watch Vintage hand watch USSR RARE Military Men's ","price":"$89.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LuIAAOSwyltZORLR/s-l225.webp","title":"One Hand Luch Mechanical Wristwatch Men's leather Vintage White 77471146 RUS","price":"$47.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/R64AAOSwWVxeyY70/s-l225.webp","title":"Victorinox Swiss Army Men's Watch I.N.O.X. Black Dial 241723.1 Authorized Dealer","price":"$169.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DjcAAOSweYhfJ2Bo/s-l225.webp","title":"Invicta 58mm Reserve Ocean Hawk 18k Gold Plated Swiss 13J Black Dial Chron Watch","price":"$1.25","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rLkAAOSwva1a2C46/s-l225.webp","title":"Fashion Men's Leather Military Casual Analog Quartz Wrist Watch Business Watches","price":"$3.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/0f0AAOSwH~ta2C4z/s-l225.webp","title":"2020 Men's Leather Military Casual Analog Quartz Wrist Watch Business Watches","price":"$2.79 to $3.29","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/w1oAAOSw3BReV6W4/s-l225.webp","title":"40mm parnis 316L steel automatic mens Watch Sapphire glass GMT Date Movement","price":"$66.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/824AAOSwrHheu6pV/s-l225.webp","title":"50mm PARNIS White mark Big Face Chronograph Date Quartz Mechancial mens Watch","price":"$68.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mG0AAOSwf9td5l8n/s-l225.webp","title":"Casio a158wa-1df Man Woman Unisex Vintage Classic Steel Alarm DD","price":"$23.75","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/zsMAAOSwcJVdu~oo/s-l225.webp","title":"Fashion Men's Business Stainless Steel Band Analog Quartz Wrist Watch Watches","price":"$1.20 to $2.38","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Vb8AAOSwRsJfKwyu/s-l225.webp","title":"Vintage Hermes Paris 33mm Clipper Gold Plated Leather Strap Quartz Wrist Watch","price":"$499.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/HNAAAOSw5oheegXD/s-l225.webp","title":"Casio GA100BW-1A Gent's G-Shock Alarm Black Resin Strap Dive Watch","price":"$63.91","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/O4IAAOSwvvJfKtsO/s-l225.webp","title":"MOVADO 81 E2 866 TWO-TONE BLACK DIAL STAINLESS STEEL QUARTZ MENS WATCH","price":"$109.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/~JkAAOSwsbNe5tc-/s-l225.webp","title":"TIMEX Acadia × NASA Navy WATCH Quartz Watches RARE FROM JAPAN","price":"$145.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LdgAAOSw3jZfKnbR/s-l225.webp","title":"Luxury Brand PAGANI Design Waterproof Chronograph Japan Quartz Men's Wrist Watch","price":"$60.17","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/qz0AAOSwd3FfK9Wy/s-l225.webp","title":" RARE SERVICED ACCUTRON 2182 BULOVA GOLD ELECTROPLATE TUNING FORK MEN'S WATCH N3","price":"$198.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/x~UAAOSw4SFfC65b/s-l225.webp","title":"Rare Vintage 1950s  Bucherer Man/Mens Alarm Watch Swiss Made All Steel Working ","price":"$99.95","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/K4kAAOSwjBVcmwYb/s-l225.webp","title":"40mm PARNIS Black Sterile Dial Sapphire Glass SS Automatic movement mens Watch","price":"$80.75","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/uDYAAOSw40NfKdUN/s-l225.webp","title":"Invicta Venom Mens 52mm Gold Dragon Dial Stainless Swiss Chronograph Watch 31520","price":"$398.29","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/sT8AAOSwkdFaj-zW/s-l225.webp","title":"RUSSIAN VOSTOK  AMPHIBIAN AUTO 1967 YEAR DESIGN 090660 MATTE DIVER WATCH ","price":"$79.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/QEkAAOSwxEde4tTk/s-l225.webp","title":"Vintage Seiko 5Actus 7019-5010 Day Date 21 Jewels Stainless Steel Watch c.1970's","price":"$35.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/8FkAAOSwyoJe-0Ko/s-l225.webp","title":"Glycine Combat Sub Automatic Black Dial Men's Watch GL0087","price":"$311.85","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/LwoAAOSw1gxew~Z1/s-l225.webp","title":"Victorinox Swiss Army 241794 Women's Alliance Small Diamond Watch","price":"$199.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ap8AAOSwePlemm09/s-l225.webp","title":"Seiko DAGAZ moded Automatic Watch","price":"$235.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/mjoAAOSw-vpfK8rJ/s-l225.webp","title":"VINTAGE SEIKO KING TWIN QUARTZ 9443-7000 SGP JAPAN 1982 MEN'S WATCH","price":"$220.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/RXgAAOSwTEtd6SLA/s-l225.webp","title":"Seiko 5 Automatic Silver Dial Stainless Steel Mens Watch SNXS73K SNXS73 RRP £169","price":"$195.82","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/4S8AAOSwEDFd0Sdn/s-l225.webp","title":"New Hamilton Khaki Field Auto Black Dial Leather Band Men's Watch H70455533","price":"$367.86","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/bQ0AAOSwbdBfIh7N/s-l225.webp","title":"Stauer Men's Beige Dial Black Leather Strap Quartz Watch","price":"$29.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/tj4AAOSwfBlcSPUx/s-l225.webp","title":"New Women's Burgi BUR129SS Diamond Swiss Multifunction Black Leather Strap Watch","price":"$49.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/s6kAAOSwsy5dmUv~/s-l225.webp","title":"PARNIS Sapphire Glass Date Bracelet GMT Automatic Movement Men's Watch 40mm","price":"$78.59","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/otQAAOSw1r1fK7ly/s-l225.webp","title":"40mm PARNIS blue dial sapphire glass ceramic bezel date movement Mens Watch ","price":"$89.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/048AAOSwuNNcT1O8/s-l225.webp","title":" Diver watch 200 m. russian VOSTOK mechanical (Automatic) # 650541 (24 H) NEW ","price":"$71.40","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BwgAAOSwJoJfIMfJ/s-l225.webp","title":"Stauer Urban Blue 28998 Onion Crown Men's Watch with Leather Band - New In Box","price":"$12.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/myUAAOSwRNde9Mkv/s-l225.webp","title":"NEW EMPORIO ARMANI AR11145 WOMEN WATCH - 2 YEARS WARRANTY","price":"$111.70","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/iFUAAOSwoH1fCe0S/s-l225.webp","title":"SKMEI Electronic LED Men Watch Digital Waterproof Chrono Alarm Wristwatch 1639","price":"$12.56 to $14.27","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/kgIAAOSwnodcw83s/s-l225.webp","title":"42mm CORGEUT black dial steel case date power reserve Automatic mens Watch C121","price":"$85.50","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/wgsAAOSwvt1fHUa0/s-l225.webp","title":"VINTAGE MEN'S SEIKO 5 7S36B DAY DATE 40MM AUTOMATIC JAPAN WRIST WATCH A8595","price":"$39.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/hR4AAOSwY~VdYAK2/s-l225.webp","title":"CASIO G-SHOCK FROGMAN GWF-1000-1JF Multiband 6 Men's Watch New in Box !","price":"$547.06","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/BcQAAOSw4i9fKzAa/s-l225.webp","title":"CLASSIC 95' SEIKO 7002 7000 SS MENS AUTOMATIC DIVE #533222 RED BLACK WATCH NR","price":"$98.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/SwsAAOSwEy1d2reL/s-l225.webp","title":"New Hamilton Ventura Black Dial Leather Band Men's Watch H24411732","price":"$562.39","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/N8wAAOSwK~9e6U9S/s-l225.webp","title":"Invicta Mens 52mm Limited Edition Marvel Punisher Chrono Black Rose Gold Watch","price":"$40.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/Z8kAAOSwZk9fK9VL/s-l225.webp","title":"41mm PAGANI DESIGN Sapphire Blue Dial Exhibition Back Flywheel Automatic Watch ","price":"$79.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/DusAAOSwn1Jdyy3A/s-l225.webp","title":"Hamilton Khaki Aviation ETO Chrono Black Dial Rubber Band Men's Watch H77612333","price":"$511.29","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/gqMAAOSwhYJcRbgb/s-l225.webp","title":"NEW GENUINE EMPORIO ARMANI AR1451 BLACK CERAMICA CHRONOGRAPH MEN'S WATCH UK","price":"$99.82","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/rxoAAOSwGfVeq0KZ/s-l225.webp","title":"NEW GENTS $300 REACTOR 40MM SUNRAY BLUE SS 200M CRITICAL MASS DIVE WATCH 74603 R","price":"$89.99","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/7XkAAOSwD5NfKpK2/s-l225.webp","title":"Vintage Swiss TITUS 17J Mechanical Manual Used Watch","price":"$60.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/ztIAAOSwW21eyI1w/s-l225.webp","title":"41mm bliger sterile black dial sapphire glass automatic mens watch Mesh belt","price":"$75.60","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/9osAAOSwR9BfEAuH/s-l225.webp","title":"Seiko SNE095P2 Analog Solar Wrist Watch Men's Watch 100M Nylon Band Tag Date New","price":"$148.60","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/JrcAAOSwfA5e7Ywo/s-l225.webp","title":"Women's Vintage SEIKO 11-7619 Mechanical Hand-Wind-Up Watch In Box- WORKING","price":"$17.00","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/G24AAOSwFmxacB-u/s-l225.webp","title":"42mm DEBERT white dial date day coffee strap multifunction automatic mens Watch","price":"$63.75","category":"watches"},{"imgSrc":"https://i.ebayimg.com/thumbs/images/g/-6cAAOSwEEBZ~QdG/s-l225.webp","title":"41mm CORGUET black dial red bezel Sapphire 21 jewels miyota automatic mens Watch","price":"$94.50 to $103.50","category":"watches"}]
  
  items: Item[] = [];


  constructor(private http: HttpClient) { }

  addItem(item: Item): void {
    this.items.push(item);
  }

  getItems(): Item[] {
    let itemsList = this.items;
    // itemsList = itemsList.map(item => ({...item, visible: true}) );
    console.log(itemsList);
     return itemsList.slice();
    }

  getItem(i: number): Item {
    return this.items[i];
  }

  removeItem(i: number): void {
    this.items.splice(i, 1);
  }

  changeVisibleState(i: number): void {
    this.items[i].visible = !this.items[i].visible;
    this.saveitems(this.items);
  }

  updateItem(i: number, newItem: Item) {
    this.items[i] = newItem;
    this.saveitems(this.items);
  }


  // BELOW IS FIREBASE
  saveitems(items) {
    this.http.put(
      'https://webshop-lecture.firebaseio.com/items.json',
      items
    ).subscribe(response => {
      console.log(response);
    });
  }

  addNewItem(item: Item) {
    this.http.post(
      'https://webshop-lecture.firebaseio.com/items.json',
      item
    ).subscribe(response => {
      console.log(response);
    });
  }

  fetchItems() {
    return this.http.get(
      'https://webshop-lecture.firebaseio.com/items.json')
      .pipe(map(itemsArray => {
        let newItemArray: Item[] = []

        for (const key in itemsArray) {
          console.log(key);
          console.log(itemsArray[key]);
          newItemArray.push(({...itemsArray[key], firebaseId: key}));
        } 

        this.items = newItemArray;
        return newItemArray;
      }));
  }

  getItemFromDb(id: string) {
    return this.items.find(item => item.firebaseId === id);
  }

}
