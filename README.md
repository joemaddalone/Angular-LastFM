Angular Directive for LastFM
====================

Usage:
---------------------
	<ul lastfm="USERNAME" 
		period="overall | 7day | 1month | 3month | 6month | 12month" 
		limit="LIMIT" 
		data-key="API KEY">
	</ul>
    
Example:
---------------------
	<ul lastfm-artist="countymojo" 
		period="3month" 
		limit="10" 
		data-key="12345678901234567890">
	</ul>

	<ul lastfm-album="countymojo" 
		period="3month" 
		limit="10" 
		data-key="12345678901234567890">
	</ul>

	<ul lastfm-track="countymojo" 
		period="3month" 
		limit="10" 
		data-key="12345678901234567890">
	</ul>