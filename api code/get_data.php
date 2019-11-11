<?php


    
   require 'connection.php';

    $query = "SELECT * FROM `slider`";
    $var = mysqli_query($conn,$query);
    $count=mysqli_num_rows($var);
    
   
	 $querySel = "SELECT * FROM `sliderControl`";
     $varSel = mysqli_query($conn,$querySel);
     $userSel = mysqli_fetch_object($varSel);	
     
	 $dataControl['id']=$userSel->id;
     $dataControl['nav']=$userSel->nav;
     $dataControl['dot']=$userSel->dot;
     $dataControl['keyBoard']=$userSel->keyBoard;
     $dataControl['imgSelect']=$userSel->imgSelect;
	 $dataControl['mouse']=$userSel->mouse;
	 $dataControl['items']=$userSel->items;
	 $resp['_1199']=$userSel->_1199;
	 $resp['_768']=$userSel->_768;
	 $resp['_480']=$userSel->_480;
	  $resp['_360']=$userSel->_360;
	    $resp['_1500']=$userSel->_1500;
	       $resp['_1700']=$userSel->_1700;
	 

    
	 
	 
	if($count > 0)  {
	    
	    $jdata=array();
		while($user = mysqli_fetch_object($var))
		{
            $data['id']=$user->id;
            $data['src']=$user->imgpath;
            $data['name']=$user->name;
            $data['heading']=$user->heading;
            $data['paraText']=$user->paraText;
			$data['buttonText']=$user->buttonText;
            $listing_data[]=$data;
            
		} 


		
	
        $jdata['msg'] = "Success";
        $jdata['length']=$count;
		$jdata['data'] = $listing_data;
		$jdata['dataControl'] = $dataControl;
		$jdata['resp'] =  $resp;
		
}


    echo json_encode($jdata);	   

?>





