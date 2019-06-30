<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Ajax_model extends CI_Model {
	public function __construct()
	{
		parent::__construct();
	}
	public function getarticles()
	{
		$this->db->select('*');
		$this->db->from('articles');
		$query=$this->db->get();
		return $query->result();
	}
	public function insertarticle($data)
	{
		$this->db->insert('articles',$data);
        return $this->db->insert_id();
	}
	public function getarticleusingid($id)
	{
       $this->db->select('*');
       $this->db->from('articles');
       $this->db->where('articles_id',$id);
      $query= $this->db->get();
      return json_encode($query->row());
	}
	public function deleterecord($id)
	{
       $this->db->where('articles_id',$id);
       $this->db->delete('articles');
       return true;
	}
}
