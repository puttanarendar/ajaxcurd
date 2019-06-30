<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ajax_Controller extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Ajax_model');
	}
	public function index()
	{
		$this->load->view('templates/index.html');
	}
	public function getarticles()
	{
       $data= $this->Ajax_model->getarticles();
       echo json_encode($data);
	}
	public function getarticlespage()
	{
       $this->load->view('templates/articles.html');
	}
	public function CreateArticle()
	{
		$this->load->view('templates/createarticle.html');
	}
	public function ViewArticle()
	{
		$this->load->view('templates/view.html');
	}

	public function getdata()
	{
		$id=$_GET['id'];
		//echo $id;
		$data=$this->Ajax_model->getarticleusingid($id);
		echo $data;
	}
	public function articledata()
	{
		extract($_POST);
		$data=array(
         'title'=>$title,
         'description'=>$description
		);
		$data=$this->Ajax_model->insertarticle($data);
		if($data)
		{
          echo true;
		}
		else
		{
			echo false;
		}
	}
	public function updatedata()
	{
	   //$id=$_GET['id'];
    
       echo true;
       //die;
	}
	public function DeleteArticle()
	{
		$this->load->view('templates/delete.html');
	}
	public function deletedata()
	{
		$id=$_GET['id'];
		//echo $id;
		$data=$this->Ajax_model->deleterecord($id);
		if($data)
		{
			echo true;
		}
		else
		{
			echo false;
		}
	}
}
