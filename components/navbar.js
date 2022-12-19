function nav() {
    return `
      <section>
            <nav class="navbar">  
              <div id="disable_body"></div>
              <div class="top_nav">
                <div class="nav_div blank"></div>
                <div class="nav_div side_bar">
                  <i class="fa-solid fa-bars"></i>
                </div>
                <div class="nav_div logo">
                  <div class="logo_div">
                    <a href="index.html">
                      <img
                        class="app_logo"
                        src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/BLUEFLY-LOGO-11-20.png?v=1613183141"
                        alt="logo"
                      />
                    </a>
                  </div>
                </div>
                <div class="nav_div icons">
                  <div class="icon_right">
                    <a href=""
                      ><i class="fa-solid fa-magnifying-glass"></i>
                      <span>SEARCH</span></a
                    >
                    <a href="login.html"><i class="fa-regular fa-user"></i></a>
                    <div>
                      <a href=""
                        ><i class="fa-solid fa-bag-shopping" id="cartOpen"></i
                      ></a>
                      <div class="cart_popup" id="cart">
                        <i class="fa-solid fa-xmark" id="close_modal"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bottom_div hovering">
                <ul>
                  <li class="cloth clear">
                    CLOTHING
                    <div class="hover_div">
                      <div class="cloth_main">
                        <div class="cloth_main1">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/women.jpg?v=1613619704"
                            alt="cloth_img"
                          />
                          <h5>DRESSES</h5>
                          <p>Up to 80% off</p>
                        </div>
                        <div class="cloth_main2">
                          <a href="womensClothing.html"><h3>WOMEN'S CLOTHING</h3></a>
                          <ul>
                            <li><a>Coats & Jackets</a></li>
                            <li><a>Dresses</a></li>
                            <li><a>Jeans & Denim</a></li>
                            <li><a>JumpSuits & Rompers</a></li>
                            <li><a>Loungewear & Sleepwear</a></li>
                            <li><a>Pants & Leggings</a></li>
                            <li><a>Shorts</a></li>
                            <li><a>Skirts</a></li>
                            <li><a>Sweaters</a></li>
                            <li><a>Sweatshirts and Hoodies</a></li>
                            <li><a>Swimwear & Coverups</a></li>
                            <li><a>Tops & Tees</a></li>
                          </ul>
                        </div>
                        <div class="cloth_main3">
                          <a href="mensClothing.html"><h3>MEN'S CLOTHING</h3></a>
                          <ul>
                            <li><a>Activewear</a></li>
                            <li><a>Causal Button-Down Shirts</a></li>
                            <li><a>Coats & Jackets</a></li>
                            <li><a>Dress Shirts</a></li>
                            <li><a>Jeans & Denim</a></li>
                            <li><a>Pants</a></li>
                            <li><a>Polo Shirts</a></li>
                            <li><a>Shorts</a></li>
                            <li><a>Sports Coats & Blazers</a></li>
                            <li><a>Suits & Seperates</a></li>
                            <li><a>Sweaters</a></li>
                            <li><a>Sweatshirts & Hoodies</a></li>
                            <li><a>Swimwear</a></li>
                            <li><a>T-Shirts</a></li>
                            <li><a>Underwear & Socks</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="shoes clear">
                    SHOES
                    <div class="hover_div">
                      <div class="shoes_main">
                        <div class="shoes_main1">
                          <a href="womensShoes.html"><h3>WOMEN's SHOES</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Boots</a></li>
                            <li><a href="">Espadrills</a></li>
                            <li><a href="">Flats</a></li>
                            <li><a href="">Mules & Slides</a></li>
                            <li><a href="">Oxfords & Loafers</a></li>
                            <li><a href="">Pumps & Heels</a></li>
                            <li><a href="">Sandals</a></li>
                            <li><a href="">Sneakers</a></li>
                            <li><a href="">Wedges</a></li>
                            <li><a href="">Slipepes</a></li>
                          </ul>
                        </div>
                        <div class="shoes_main2">
                          <a href="womensShoes.html"><h3>WOMEN's DESIGNERS</h3></a>
                          <ul>
                            <li><a href="">Alexander McQueen</a></li>
                            <li><a href="">Balenciago</a></li>
                            <li><a href="">Bottega Veneta</a></li>
                            <li><a href="">Christian Louboutin</a></li>
                            <li><a href="">Dolce & Gabbana</a></li>
                            <li><a href="">Oxfords & Loafers</a></li>
                            <li><a href="">Fendi</a></li>
                            <li><a href="">Gianvito Rossi</a></li>
                            <li><a href="">Gucci</a></li>
                            <li><a href="">Manolo Blahnik</a></li>
                            <li><a href="">Saint Laurent</a></li>
                            <li><a href="">Stuart Weitzman</a></li>
                            <li><a href="">Salvatore Ferragamo</a></li>
                            <li><a href="">Valentino</a></li>
                          </ul>
                        </div>
                        <div class="shoes_main3">
                          <a href="mensShoes.html"><h3>MEN's SHOES</h3></a>
                          <ul>
                            <li><a href="">Shol All</a></li>
                            <li><a href="">Boots</a></li>
                            <li><a href="">Drivers, Loafers & Slip-ons</a></li>
                            <li><a href="">Christian Louboutin</a></li>
                            <li><a href="">Oxford & Derby Shoes</a></li>
                            <li><a href="">Sandals & Flip Flops</a></li>
                            <li><a href="">Slippers</a></li>
                            <li><a href="">Sneakers</a></li>
                          </ul>
                        </div>
                        <div class="shoes_main4">
                          <a href="mensShoes.html"><h3>MEN's DESIGNERS</h3></a>
                          <ul>
                            <li><a href="">Alexander McQueen</a></li>
                            <li><a href="">Balenciago</a></li>
                            <li><a href="">Bottega Veneta</a></li>
                            <li><a href="">Burberry</a></li>
                            <li><a href="">Chritian Louboutin</a></li>
                            <li><a href="">Common Projects</a></li>
                            <li><a href="">Dolce & Gabbana</a></li>
                            <li><a href="">Giuseppe & Zanotti</a></li>
                            <li><a href="">Golden Goose</a></li>
                            <li><a href="">Gucci</a></li>
                            <li><a href="">Off-White</a></li>
                            <li><a href="">Saint Laurent</a></li>
                            <li><a href="">Salvatore Ferragama</a></li>
                            <li><a href="">Valentino</a></li>
                          </ul>
                        </div>
                        <div class="shoes_main5">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/SHOES-MEN.jpg?4112"
                            alt="shoes_img"
                          />
                          <h5>DRIVERS, LOAFERS & SLIP-ONS</h5>
                          <p>UP TO 60% OFF</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="handbags clear">
                    HANDBAGS & ACCESSORIES
                    <div class="hover_div">
                      <div class="handbags_main">
                        <div class="handbags_main5">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag2.jpg?v=1613619716"
                            alt="handbags_img"
                          />
                          <h5>SATCHELS</h5>
                          <p>UP TO 60% OFF</p>
                        </div>
                        <div class="handbags_main1">
                          <a href="womensHandbags.html"><h3>ALL HANDBAGS</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Backpacks</a></li>
                            <li><a href="">Bucket Bags</a></li>
                            <li><a href="">Clutches</a></li>
                            <li><a href="">Crossbody Bags</a></li>
                            <li><a href="">Hobo Bags</a></li>
                            <li><a href="">Satchels</a></li>
                            <li><a href="">Shoulder Bags</a></li>
                            <li><a href="">Tote Bags</a></li>
                            <li><a href="">Wallets & Cardholders</a></li>
                          </ul>
                        </div>
                        <div class="handbags_main2">
                          <a href="womensHandbags.html"><h3>TOP DESIGNERS</h3></a>
                          <ul>
                            <li><a href="">Balenciaga</a></li>
                            <li><a href="">Bottega Veneta</a></li>
                            <li><a href="">Burberry</a></li>
                            <li><a href="">Celine</a></li>
                            <li><a href="">Chloe</a></li>
                            <li><a href="">Dolce & Gabbana</a></li>
                            <li><a href="">Fendi</a></li>
                            <li><a href="">Givenchy</a></li>
                            <li><a href="">Gucci</a></li>
                            <li><a href="">Mario Valentino</a></li>
                            <li><a href="">Prada</a></li>
                          </ul>
                        </div>
                        <div class="handbags_main3">
                          <a href="womensPreOwned.html"><h3>PRE-OWNED</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Bucket Bags</a></li>
                            <li><a href="">Clutches</a></li>
                            <li><a href="">Flats</a></li>
                            <li><a href="">Crossbody Bags</a></li>
                            <li><a href="">Hobo Bags</a></li>
                            <li><a href="">Satchels</a></li>
                            <li><a href="">Shoulder Bags</a></li>
                            <li><a href="">Tote Bags</a></li>
                            <li><a href="">Wallets & Cardholders</a></li>
                          </ul>
                        </div>
                        <div class="handbags_main4">
                          <a href="womensAccessories.html"><h3>ACCESSORIES</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li>
                              <a href="">Bags Charms, Straps & Accessories</a>
                            </li>
                            <li><a href="">Belts</a></li>
                            <li><a href="">Cosmetic Bags</a></li>
                            <li><a href="">Hats</a></li>
                            <li><a href="">Gloves</a></li>
                            <li><a href="">Scarves & Wraps</a></li>
                            <li><a href="">Optical & Reading Glasses</a></li>
                            <li><a href="">Sunglasses</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="design clear">
                    DESIGNERS
                    <div class="hover_div">
                      <div class="design_main">
                        <div class="design_main1">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/handbag.jpg?v=1613619701"
                            alt="design"
                          />
                          <h5>GUCCI</h5>
                          <p>Up to 64% off</p>
                        </div>
                        <div class="design_main2">
                          <a href="womensAccessories.html"><h3>ACCESSORIES</h3></a>
                          <ul>
                            <li><a href="">Alexander McQueen</a></li>
                            <li><a href="">Balenciaga</a></li>
                            <li><a href="">Bottega Veneta</a></li>
                            <li><a href="">Burberry</a></li>
                            <li><a href="">Celine</a></li>
                            <li><a href="">Chloe</a></li>
                            <li><a href="">Christian Lauboutin</a></li>
                            <li><a href="">Dolce & Gabbana</a></li>
                            <li><a href="">Fendi</a></li>
                            <li><a href="">Gianvito Rossi</a></li>
                            <li><a href="">Givenchy</a></li>
                          </ul>
                        </div>
                        <div class="design_main3">
                          <ul>
                            <li></li>
                            <li><a href="">Manolo Blahnik</a></li>
                            <li><a href="">Mario Valentino</a></li>
                            <li><a href="">Maschino</a></li>
                            <li><a href="">Off-White</a></li>
                            <li><a href="">Prada</a></li>
                            <li><a href="">Saint Laurent</a></li>
                            <li><a href="">Stella McCartney</a></li>
                            <li><a href="">Stuart Weitzman</a></li>
                            <li><a href="">Tom Ford</a></li>
                            <li><a href="">Valentino</a></li>
                            <li><a href="">Veja</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="sunglass clear">
                    SUNGLASSES
                    <div class="hover_div">
                      <div class="sunglasses_main">
                        <div class="sunglasses_main1">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses_df9c0648-8d79-459a-ad8d-a7c1869f40db.jpg?v=1613619719"
                            alt="sunglass"
                          />
                          <h5>SUNGLASSES</h5>
                          <p>Up to 80% off</p>
                        </div>
                        <div class="sunglasses_main2">
                          <a href="womensSunglasses.html"><h3>WOMEN'S SUNGLASSES</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Balenciaga</a></li>
                            <li><a href="">Celine</a></li>
                            <li><a href="">Dior</a></li>
                            <li><a href="">Emilio Pucci</a></li>
                            <li><a href="">Fendi</a></li>
                            <li><a href="">Givenchy</a></li>
                            <li><a href="">Gucci</a></li>
                            <li><a href="">Jimmy Choo</a></li>
                            <li><a href="">Oliver Peoples</a></li>
                            <li><a href="">Prada</a></li>
                            <li><a href="">Roberto Cavalli</a></li>
                          </ul>
                        </div>
                        <div class="sunglasses_main3">
                          <a href="mensSunglasses.html"><h3>MEN'S SUNGLASSES</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Burberry</a></li>
                            <li><a href="">Carrera</a></li>
                            <li><a href="">Dior</a></li>
                            <li><a href="">Ermenegildo Zenga</a></li>
                            <li><a href="">Givenchy</a></li>
                            <li><a href="">Gucci</a></li>
                            <li><a href="">Jimmu Choo</a></li>
                            <li><a href="">Montblanc</a></li>
                            <li><a href="">Persol</a></li>
                            <li><a href="">Parad</a></li>
                            <li><a href="">Ray Ban</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="jewelry clear">
                    JEWELRY & WATHCES
                    <div class="hover_div">
                      <div class="jewelry_main">
                        <div class="jewelry_main1">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/watch.jpg?v=1613619725"
                            alt="WATHCES"
                          />
                          <h5>WATHCES</h5>
                          <p>Up to 80% off</p>
                        </div>
                        <div class="jewelry_main2">
                          <a href="womensJwellery.html"><h3>JEWELRY</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                            <li><a href="">Bracelets</a></li>
                            <li><a href="">Brooches & Pins</a></li>
                            <li><a href="">Earrings</a></li>
                            <li><a href="">Necklaces</a></li>
                            <li><a href="">Rings</a></li>
                            <li><a href="">Watches</a></li>
                            <li><a href="">Men's jewelry</a></li>
                          </ul>
                        </div>
                        <div class="jewelry_main3">
                          <a href="watches.html"><h3>FEATURED DESIGNER WATHCES</h3></a>
                          <div class="jewelry_main4">
                            <div>
                              <ul>
                                <li><a href="">Shop All</a></li>
                                <li><a href="">Anne Klein</a></li>
                                <li><a href="">Briston</a></li>
                                <li><a href="">Calvin Klein</a></li>
                                <li><a href="">CCCP</a></li>
                                <li><a href="">Christophe Duchamp</a></li>
                                <li><a href="">CT Scucleria</a></li>
                                <li><a href="">Daniel Wellington</a></li>
                                <li><a href="">Diesel</a></li>
                                <li><a href="">Esorit</a></li>
                                <li><a href="">Fossil</a></li>
                                <li><a href="">Frederique Constant</a></li>
                              </ul>
                            </div>
                            <div>
                              <ul>
                                <li><a href="">Jacques Lemans</a></li>
                                <li><a href="">Jacy</a></li>
                                <li><a href="">Juicy Couture</a></li>
                                <li><a href="">Michael Kors</a></li>
                                <li><a href="">Mido</a></li>
                                <li><a href="">Omega</a></li>
                                <li><a href="">Pierre Cardin</a></li>
                                <li><a href="">Rado</a></li>
                                <li><a href="">Red Line</a></li>
                                <li><a href="">Salvatore Ferragamo</a></li>
                                <li><a href="">Seiko</a></li>
                                <li><a href="">TechnoMarine</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="under clear">
                    UNDER $ 50
                    <div class="hover_div">
                      <div class="under_main">
                        <div class="under_main2">
                          <a href=""><h3>SHOP BY PRICEPOINT</h3></a>
                          <ul>
                            <li><a href="">Under $25</a></li>
                            <li><a href="">$25-$49.99</a></li>
                            <li><a href="">Shop All Under $50</a></li>
                          </ul>
                        </div>
                        <div class="under_main2">
                          <a href=""><h3>SHOP BY CATEGORY</h3></a>
                          <ul>
                            <li><a href="">Women</a></li>
                            <li><a href="">Men</a></li>
                            <li><a href="">Shoes</a></li>
                            <li><a href="">Handbags & Accessories</a></li>
                            <li><a href="">Jewelry</a></li>
                            <li><a href="">Kids</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="beauty clear">
                    BEAUTY
                    <div class="hover_div">
                      <div class="beauty_main">
                        <div class="beauty_main1">
                          <a href=""><h3>FRAGRANCE</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                          </ul>
                        </div>
                        <div class="beauty_main2">
                          <a href=".pages/skincare.html"><h3>SKINCARE</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                          </ul>
                        </div>
                        <div class="beauty_main3">
                          <a href=".pages/haircare.html"><h3>HAIRCARE</h3></a>
                          <ul>
                            <li><a href="">Shop All</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="clearance clear">
                    CLEARANCE
                    <div class="hover_div">
                      <div class="clearance_main">
                        <div class="clearance_main1">
                          <img
                            src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/clearance_8fa5acf3-7405-41aa-8c98-b0891649c9ab.jpg?v=1613619722"
                            alt="CLEARANCE"
                          />
                          <h5>CLEARANCE</h5>
                          <p>70-90% OFF</p>
                        </div>
                        <div class="clearance_main2">
                          <a href=""><h3>WOMEN'S</h3></a>
                          <ul>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">Activewear</a></li>
                            <li><a href="">Coats & Jackets</a></li>
                            <li><a href="">Dresses</a></li>
                            <li><a href="">Handbags</a></li>
                            <li><a href="">Jeans & Denim</a></li>
                            <li><a href="">Jewelery</a></li>
                            <li><a href="">Lingerie & Hosiery</a></li>
                            <li><a href="">Pants & Leggings</a></li>
                            <li><a href="">Shoes</a></li>
                          </ul>
                        </div>
                        <div class="clearance_main3">
                          <a href=""><h3>MEN'S</h3></a>
                          <ul>
                            <li><a href="">Accessories</a></li>
                            <li><a href="">Coats & Jackets</a></li>
                            <li><a href="">Dress & Shirts</a></li>
                            <li><a href="">Pants</a></li>
                            <li><a href="">Polo Shirts</a></li>
                            <li><a href="">Suits & Seperates</a></li>
                            <li><a href="">Sunglasses</a></li>
                            <li><a href="">Sweaters</a></li>
                            <li><a href="">T-Shirts</a></li>
                            <li><a href="">Watches</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </section>
          <section>
            <div class="txtSlider_section">
              <div id="welcome_textslider" class="textslider"></div>
            </div>
          </section>
      `;
  }
  
  export default nav;
  