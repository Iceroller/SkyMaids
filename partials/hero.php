<div class="hero">
    <div class="container">
        <div class="border">
            <div class="wrapper">
                <div class="leftSide">
                    <div id="slick">
                        <div>
                            <div class="img--holder" >
                            </div>
                            
<!--
                            style="background: url(../img/24b77bfa-7a8-11e3-86e-feb866bf2ed_web_scale_.534188_.534188_.jpg); background-size: cover;
                            -moz-background-size: cover;
                            -webkit-background-size: cover;"
-->
                            
                        </div>
                        <div>
                            <div class="img--holder">
                            </div>
                        </div>
                        <div>
                            <div class="img--holder">
                            </div>
                        </div>
                    </div><!-- /#slick -->                   
                </div>
                <div class="rightSide">
                    <div class="example">
                            <div class="r">
                            <div class="box after opened" id="dot5" style>
                                <h2>SkyMaids is in the business of indastry-leading,<span class="block">professional cleaning services.</span></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident debitis officiis consequuntur fugiat, voluptatum quo laborum aspernatur perspiciatis, in nobis, maiores consequatur odio harum nihil, aliquam! Maiores ipsum dolor sit amet, consectetur adipisicing elit. </p>
<!--                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In unde velit quis. Elit ipsum dolor sit amet, consectetur adipisicing elit. Ipsa molestiae, quas fuga.</p>-->
                                <p><span>Service Guarantee:</span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat minus praesentium in iure temporibus, ipsum reiciendis iste optio itaque a. Jesd ipsum dolor sit amet, consectetur adipisicing elit. Ipsum hic, debitis dolorem sint.</p>
<!--                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nisi. Consectetur ipsum dolor sit amet, consectetur adipisicing elit. Quo, ullam? gggggggggggggggggg ggggggggggg ggggggg ggggggggggg gggggggggggggggggg ggggggggggggggg ggggggggggggggggggg</p>-->
                                <a class="toggle" href="#">
                                    <span class="open">[ + ]</span>
                                    <span class="close">[ - ]</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <script>
       
			$(function() {
				$('#dot1').dotdotdot();

				$('#dot2').dotdotdot();

				$('#dot3').dotdotdot({
					after: 'a.readmore'
				});

				$('#dot4').dotdotdot({
					watch: 'window'
				});

				var $dot5 = $('#dot5');
				$dot5.append( ' <a class="toggle" href="#"><span class="open">[ + ]</span><span class="close">[ - ]</span></a>' );


				function createDots()
				{
					$dot5.dotdotdot({
						after: 'a.toggle'
					});
				}
				function destroyDots() {
					$dot5.trigger( 'destroy' );
				}
				createDots();

				$dot5.on(
					'click',
					'a.toggle',
					function() {
						$dot5.toggleClass( 'opened' );

						if ( $dot5.hasClass( 'opened' ) ) {
							destroyDots();
						} else {
							createDots();
						}
						return false;
					}
				);

				$('#dot6 .pathname').each(function() {
					var path = $(this).html().split( '/' );
					if ( path.length > 1 ) {
						var name = path.pop();
						$(this).html( path.join( '/' ) + '<span class="filename">/' + name + '</span>' );
						$(this).dotdotdot({
							after: '.filename',
							wrap: 'letter'
						});						
					}
				});

			});
		
                </script>
            </div><!--wrap-->
        </div><!--border-->
    </div><!--container-->
</div><!--hero-->