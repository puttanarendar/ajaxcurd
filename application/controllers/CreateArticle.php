<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CreateArticle extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Ajax_model');
	}
	public function index()
	{
		$this->load->view('templates/createarticle.html');
	}
}
