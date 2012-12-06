package com.coderwall.badges;

import android.os.Bundle;
import org.apache.cordova.*;

import com.coderwall.badges.R;

//import com.coderwall.badges.R;

public class MainActivity extends DroidGap {

    @Override
    public void onCreate(Bundle savedInstanceState) {
    	 super.onCreate(savedInstanceState);
         super.setIntegerProperty("splashscreen", R.drawable.splash);
         super.loadUrl("file:///android_asset/www/index.html", 8000);
    }

    
}
